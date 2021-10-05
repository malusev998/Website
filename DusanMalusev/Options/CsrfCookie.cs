using System.ComponentModel.DataAnnotations;

namespace DusanMalusev.Options
{
    public class CsrfCookie
    {
        public const string Key = "CsrfCookieOptions";

        [Required]
        public string Name { get; set; }

        [Required]
        public string Domain { get; set; }

        [Required]
        public bool Secure { get; set; }

        [Required]
        public int ExpireIn { get; set; }

        [Required]
        public string HeaderName { get; set; }

        [Required]
        public string FieldName { get; set; }

        public string Path { get; set; }
    }
}
