using System.Xml.Serialization;

namespace Sitemap
{
    public class Location
    {
        [XmlElement("loc")] public string Url { get; set; }

        [XmlElement("changefreq")] public ChangeFrequency? ChangeFrequency { get; set; }

        public bool ShouldSerializeChangeFrequency() => ChangeFrequency.HasValue;

        [XmlElement("lastmod")] public DateTime? LastModified { get; set; }

        public bool ShouldSerializeLastModified() => LastModified.HasValue;

        [XmlElement("priority")] public double? Priority { get; set; }

        public bool ShouldSerializePriority() => Priority.HasValue;

        [XmlElement("image", Namespace = "http://www.google.com/schemas/sitemap-image/1.1")]
        public List<SitemapImage> Images { get; set; }

        public bool ShouldSerializeImages() => Images is { Count: > 0 };
    }
}