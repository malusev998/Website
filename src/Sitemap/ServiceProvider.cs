using Microsoft.Extensions.DependencyInjection;

namespace Sitemap
{
    public static class ServiceProvider
    {
        public static IServiceCollection AddSitemapGenerator(this IServiceCollection services)
        {
            return services.AddSingleton<ISitemapGenerator, SitemapGenerator>();
        }
    }
}