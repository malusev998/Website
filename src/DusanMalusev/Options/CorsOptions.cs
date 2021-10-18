using System.ComponentModel.DataAnnotations;

namespace DusanMalusev.Options
{
    public class CorsOptions
    {
        public const string Key = "Cors";

        [Required] public string Name { get; set; } = null!;
        [Required] public bool AllowAnyMethod { get; set; }
        [Required] public bool AllowAnyHeader { get; set; }
        [Required] public string[] Origins { get; set; } = null!;
        [Required] public string[] Headers { get; set; } = null!;
        [Required] public string[] Methods { get; set; } = null!;
        [Required] public bool AllowsCredentials { get; set; }
    }
}