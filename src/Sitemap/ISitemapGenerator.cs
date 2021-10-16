namespace Sitemap
{
    public interface ISitemapGenerator
    {
        ISitemapGenerator AddRange(IEnumerable<Location> locs);
        ISitemapGenerator Add(Location item);
        Task WriteToStreamAsync(Stream stream, CancellationToken token);
        void WriteToStream(Stream stream);
    }
}