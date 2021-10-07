using Microsoft.Extensions.DependencyInjection;
using Repositories.Contracts;
using Repositories.Impl;

namespace Repositories
{
    public static class ServiceProvider
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            return services
                .AddContactRepository()
                .AddSubscriptionRepository();
        }

        private static IServiceCollection AddContactRepository(this IServiceCollection services)
        {
            return services
                .AddScoped<IContactRepository, ContactRepository>();
        }

        private static IServiceCollection AddSubscriptionRepository(this IServiceCollection services)
        {
            return services.AddScoped<ISubscriptionRepository, SubscriptionRepository>();
        }
    }
}