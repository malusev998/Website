using System.ComponentModel.DataAnnotations;

namespace DusanMalusev.Options;

public class SendGridOptions
{
    public const string Key = "SendGrid";

    [Required] public string ApiKey { get; set; } = null!;
    [Required] public string SignedUrlPublicKey { get; set; } = null!;
}