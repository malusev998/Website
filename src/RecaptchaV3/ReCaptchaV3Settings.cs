using System.ComponentModel.DataAnnotations;

namespace RecaptchaV3
{
    public class ReCaptchaV3Settings
    {
        [Required]
        public string SecretKey { get; set; }

        [Required]
        public string PublicKey { get; set; }

        [Required]
        public string Url { get; set; }

        [Required]
        public string UserAgent { get; set; }

        [Required]
        public string HeaderName { get; set; }

        [Required]
        public float Threshold { get; set; }
    }
}
