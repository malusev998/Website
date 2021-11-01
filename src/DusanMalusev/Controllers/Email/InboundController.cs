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
        private readonly WebhookParser _parser;
        private readonly SendGridOptions _sendGridOptions;

        public InboundController(ILogger<InboundController> logger, IOptions<SendGridOptions> options,
            WebhookParser parser)
        {
            _logger = logger;
            _parser = parser;
            _sendGridOptions = options.Value;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> AcceptIncomingEmail(CancellationToken cancellationToken)
        {
            var body = HttpContext.Request.Body;
            try
            {
                HttpContext.Request.EnableBuffering();
                HttpContext.Request.Body.Seek(0, SeekOrigin.Begin);
                var memoryStream = new MemoryStream(8192);

                body.CopyTo(memoryStream);
                memoryStream.Position = 0;
                var inboundEmail = await _parser.ParseInboundEmailWebhookAsync(memoryStream);
                _logger.LogInformation("New Email...");
            }
            catch (Exception e)
            {
                _logger.LogError("Exception: {E}, {Stack}", e.Message, e.StackTrace);
            }


            // _logger.LogInformation(
            //     "New Message: {Test}|{FromName} <{FromEmail}>|{SpamScore}|{SpamReport}|{SenderIp}|{Html}|{Subject}",
            //     inboundEmail.Text,
            //     inboundEmail.From.Name,
            //     inboundEmail.From.Email,
            //     inboundEmail.SpamScore,
            //     inboundEmail.SpamReport,
            //     inboundEmail.SenderIp,
            //     inboundEmail.Html,
            //     inboundEmail.Subject
            // );

            return Ok();
        }
    }
}