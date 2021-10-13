using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;

namespace Cache
{
    public static class ServiceProvider
    {
        public static IServiceCollection AddRedisCache(
            this IServiceCollection services, 
            string defaultConnectionString,
            string cacheConnectionString
            )
        {
            return services
                .AddSingleton<IConnectionMultiplexer>(_ => ConnectionMultiplexer.Connect(defaultConnectionString))
                .AddStackExchangeRedisCache(options =>
                {
                    options.InstanceName = "RedisCache";
                    options.Configuration = cacheConnectionString;
                });
        }
    }
}