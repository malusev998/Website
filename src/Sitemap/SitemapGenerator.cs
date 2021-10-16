using System.Text;
using System.Xml.Serialization;

namespace Sitemap
{
    [XmlRoot("urlset", Namespace = "http://www.sitemaps.org/schemas/sitemap/0.9")]
    public class SitemapGenerator : ISitemapGenerator
    {
        private static XmlSerializer _serializer = new(typeof(SitemapGenerator));
        private static XmlSerializerNamespaces _xmlSerializerNamespaces = new();

        public const string ImageNs = "http://www.google.com/schemas/sitemap-image/1.1";

        private List<Location> _locations = new();

        static SitemapGenerator()
        {
            _xmlSerializerNamespaces.Add("image", ImageNs);
        }


        [XmlElement("url")]
        public List<Location> Locations
        {
            get => _locations;
            set
            {
                _locations.Clear();
                AddRange(value);
            }
        }

        public ISitemapGenerator Add(Location item)
        {
            _locations.Add(item);

            return this;
        }

        public ISitemapGenerator AddRange(IEnumerable<Location> locs)
        {
            var enumerable = locs as Location[] ?? locs.ToArray();

            _locations.EnsureCapacity(_locations.Count + enumerable.Length);

            foreach (var i in enumerable)
            {
                _locations.Add(i);
            }

            return this;
        }


        public async Task WriteToStreamAsync(Stream stream, CancellationToken token)
        {
            await using var memoryStream = new MemoryStream();
            await using var writer = new StreamWriter(memoryStream, Encoding.UTF8);
            _serializer.Serialize(writer, this, _xmlSerializerNamespaces);

            await stream.WriteAsync(memoryStream.ToArray(), token);
        }

        public void WriteToStream(Stream stream)
        {
            _serializer.Serialize(stream, this, _xmlSerializerNamespaces);
        }
    }
}