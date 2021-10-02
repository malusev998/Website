using System.Text.Json.Serialization;

namespace RecaptchaV3.Internal;

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