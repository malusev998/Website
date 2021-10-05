using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Handlers
{
    public static class ServiceProvider
    {
        public static IServiceCollection AddMediatr(this IServiceCollection services)
        {
            services.AddMediatR(typeof(ServiceProvider).Assembly);

            return services;
        }
    }
}
