using System.Text.Json.Serialization;

namespace RecaptchaV3.Internal;

internal class Request
{
    [JsonPropertyName("secret")] public string SecretKey { get; set; }

    [JsonPropertyName("remoteip")] public string? Ip { get; set; }

    [JsonPropertyName("response")] public string Token { get; set; }
}