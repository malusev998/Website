using Microsoft.Extensions.Options;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

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

        if (response == null)
            return false;


        if (response.StatusCode != System.Net.HttpStatusCode.OK)
            return false;

        var bodyStream = await response.Content.ReadAsStreamAsync();

        var recaptcha = await JsonSerializer.DeserializeAsync<Response>(bodyStream, cancellationToken: cancellationToken);

        if (response == null)
            return false;

        if (!recaptcha!.Success || recaptcha.Score < threshold)
            return false;

        return true;
    }
}

internal class Request
{
    [JsonPropertyName("secret")]
    public string SecretKey { get; set; }

    [JsonPropertyName("remoteip")]
    public string? Ip { get; set; }

    [JsonPropertyName("response")]
    public string Token { get; set; }
}


internal class Response
{
    [JsonPropertyName("secret")]
    public bool Success { get; set; }

    [JsonPropertyName("challenge_ts")]
    public string TimeStamp { get; set; }

    [JsonPropertyName("hostname")]
    public string HostName { get; set; }

    [JsonPropertyName("score")]
    public float Score { get; set; }

    [JsonPropertyName("error-codes")]
    public string[]? Errors { get; set; }
}