using Microsoft.Extensions.DependencyInjection;

namespace Cache
{
    public static class ServiceProvider
    {
        public static IServiceCollection AddRedisCache(this IServiceCollection services)
        {
            return services.AddStackExchangeRedisCache(options =>
            {
                options.InstanceName = "RedisCache";
            });
        }
    }
}