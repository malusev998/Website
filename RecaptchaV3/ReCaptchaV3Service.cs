using System.Net;
using System.Net.Http;
using Microsoft.Extensions.Options;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using RecaptchaV3.Internal;

namespace RecaptchaV3;

public class ReCaptchaV3Service : IReCaptchaService
{
    private readonly HttpClient _client;
    private readonly ReCaptchaV3Settings _settings;

    public ReCaptchaV3Service(HttpClient client, IOptions<ReCaptchaV3Settings> options)
    {
        _client = client;
        _settings = options.Value;
    }

    public async Task<bool> VerifyAsync(string token, string? ip = null, float? score = null, CancellationToken cancellationToken = default)
    {
        var threshold = score ?? _settings.Threshold;

        var request = new Request
        {
            SecretKey = _settings.PrivateKey,
            Token = token,
            Ip = ip,
        };

        var content = new StringContent(JsonSerializer.Serialize(request), Encoding.UTF8, "application/json");

        var response = await _client.PostAsync("", content, cancellationToken);

        if (response is not { StatusCode: HttpStatusCode.OK })
            return false;
        
        var bodyStream = await response.Content.ReadAsStreamAsync();

        var recaptcha = await JsonSerializer.DeserializeAsync<Response>(bodyStream, cancellationToken: cancellationToken);
        
        return recaptcha!.Success && !(recaptcha.Score < threshold);
    }
}