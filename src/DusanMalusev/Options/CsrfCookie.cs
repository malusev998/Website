using System.ComponentModel.DataAnnotations;

namespace DusanMalusev.Options
{
    public class CsrfCookie
    {
        public const string Key = "CsrfCookieOptions";

        [Required] public string Name { get; set; } = null!;

        [Required] public string Domain { get; set; } = null!;

        [Required] public bool Secure { get; set; }

        [Required] public int ExpireIn { get; set; }

        [Required] public string HeaderName { get; set; } = null!;

        [Required] public string FieldName { get; set; } = null!;

        [Required] public string Path { get; set; } = null!;
    }
}