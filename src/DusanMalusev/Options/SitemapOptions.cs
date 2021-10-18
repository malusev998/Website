using System.ComponentModel.DataAnnotations;

namespace DusanMalusev.Options;

public class SitemapOptions
{
    public const string Key = "Sitemap";

    [Required] public string Domain { get; set; } = null!;
}