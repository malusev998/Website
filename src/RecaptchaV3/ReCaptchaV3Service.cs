using System.Net;
using System.Text.Json;
using Microsoft.Extensions.Options;
using RecaptchaV3.Internal;

namespace RecaptchaV3
{
    public class ReCaptchaV3Service : IReCaptchaService
    {
        private readonly HttpClient _client;
        private readonly ReCaptchaV3Settings _settings;

        public ReCaptchaV3Service(HttpClient client, IOptions<ReCaptchaV3Settings> options)
        {
            _client = client;
            _settings = options.Value;
        }

        public async Task<bool> VerifyAsync(string token, string? ip = null, float? score = null,
            CancellationToken cancellationToken = default)
        {
            var threshold = score ?? _settings.Threshold;

            var items = new List<KeyValuePair<string, string>>
            {
                new("secret", _settings.SecretKey),
                new("response", token),
            };

            if (!string.IsNullOrWhiteSpace(ip))
            {
                items.Add(new KeyValuePair<string, string>("remoteip", ip));
            }

            var content = new FormUrlEncodedContent(items);

            var response = await _client.PostAsync(string.Empty, content, cancellationToken);

            if (response is not { StatusCode: HttpStatusCode.OK })
                return false;

            var bodyStream = await response.Content.ReadAsStreamAsync(cancellationToken);

            var recaptcha =
                await JsonSerializer.DeserializeAsync<Response>(bodyStream, cancellationToken: cancellationToken);

            if (!recaptcha!.Success && (recaptcha.Errors == null || recaptcha.Errors.Length == 0) &&
                recaptcha.Score >= threshold)
            {
                return true;
            }

            return recaptcha!.Success && !(recaptcha.Score < threshold);
        }
    }
}