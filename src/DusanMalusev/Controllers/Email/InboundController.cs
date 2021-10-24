using System.Buffers;
using System.Buffers.Text;
using System.Security.Cryptography;
using System.Text;
using DusanMalusev.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using StrongGrid;

namespace DusanMalusev.Controllers.Email
{
    [ApiController]
    [Route("api/inbound")]
    public class InboundController : ControllerBase
    {
        private readonly ILogger<InboundController> _logger;
        private readonly SendGridOptions _sendGridOptions;

        public InboundController(ILogger<InboundController> logger, IOptions<SendGridOptions> options)
        {
            _logger = logger;
            _sendGridOptions = options.Value;
        }

        [HttpPost]
        public async Task<IActionResult> AcceptIncomingEmail(CancellationToken cancellationToken)
        {
            var parser = new WebhookParser();

            _logger.LogInformation("Created Webhook Parser");
            var length = Base64.GetMaxDecodedFromUtf8Length(_sendGridOptions.SignedUrlPublicKey.Length);

            _logger.LogInformation("Creating public key buffer with length: {Length}", length);

            var publicKeyBuffer = new byte[length];

            var status = Base64.DecodeFromUtf8(
                Encoding.UTF8.GetBytes(_sendGridOptions.SignedUrlPublicKey),
                publicKeyBuffer,
                out _,
                out var written
            );

            _logger.LogInformation("Bytes Written: {Bytes} Length: {Length}", written, length);

            if (status != OperationStatus.Done)
            {
                _logger.LogError("Cannot decode public key");
                return BadRequest();
            }

            var publicKeyBytes = publicKeyBuffer[..written];

            _logger.LogInformation("Public key successfully decoded");

            await using var body = Request.Body;

            // Base64 Encoded
            var signatureValues = Request.Headers[WebhookParser.SIGNATURE_HEADER_NAME];

            if (signatureValues.Count < 1 || string.IsNullOrWhiteSpace(signatureValues[0]))
            {
                _logger.LogError(
                    "Signature Header not found or empty: {HeaderName}: {@Values}",
                    WebhookParser.SIGNATURE_HEADER_NAME,
                    signatureValues
                );
                return BadRequest();
            }

            var signature = signatureValues[0]!;

            _logger.LogDebug("Signature: {Signature}", signature);

            var timestampValues = Request.Headers[WebhookParser.TIMESTAMP_HEADER_NAME];

            if (timestampValues.Count < 1 || string.IsNullOrWhiteSpace(timestampValues[0]))
            {
                _logger.LogError(
                    "Timestamp Header not found or empty: {HeaderName}: {@Values}",
                    WebhookParser.TIMESTAMP_HEADER_NAME,
                    timestampValues
                );
                return BadRequest();
            }

            var timestamp = timestampValues[0]!;

            _logger.LogDebug("Timestamp: {Timestamp}", timestamp);

            var timeStampBytes = Encoding.UTF8.GetBytes(timestamp);
            var signatureBytes = new byte[Base64.GetMaxDecodedFromUtf8Length(signature.Length)];

            status = Base64.DecodeFromUtf8(
                Encoding.UTF8.GetBytes(signature).AsSpan(),
                signatureBytes.AsSpan(),
                out _,
                out written
            );

            if (status != OperationStatus.Done)
            {
                _logger.LogError(
                    "Error decoding signature from base64: {Signature} {Length}",
                    signature,
                    written
                );

                return BadRequest();
            }

            var data = new byte[timeStampBytes.Length + body.Length];

            _logger.LogInformation("Request length {Length}", body.Length);

            for (var i = 0; i < timeStampBytes.Length; i++)
            {
                data[i] = timeStampBytes[i];
            }

            _logger.LogInformation("Timestamp bytes copied to data array");

            var request = new Memory<byte>(data[timeStampBytes.Length..]);

            await body.ReadAsync(request, cancellationToken);

            using var eCDsa = ECDsa.Create();

            eCDsa.ImportSubjectPublicKeyInfo(publicKeyBytes, out _);

            _logger.LogInformation("Importing public key into ECDsa");

            var verified = eCDsa.VerifyData(
                data,
                signatureBytes[..written],
                HashAlgorithmName.SHA256,
                DSASignatureFormat.Rfc3279DerSequence
            );

            if (!verified)
            {
                _logger.LogError("Signature verification failed");

                return BadRequest();
            }

            var inboundEmail = await parser.ParseInboundEmailWebhookAsync(body);

            _logger.LogInformation("New Message: {@Email}", inboundEmail);

            return Ok();
        }
    }
}