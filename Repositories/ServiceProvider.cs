using Microsoft.Extensions.DependencyInjection;
using Repositories.Contracts;
using Repositories.Impl;

namespace Repositories;

public static class ServiceProvider
{
    public static IServiceCollection AddRepositories(this IServiceCollection services)
    {
        return AddContactRepository(services);
    }

    public static IServiceCollection AddContactRepository(this IServiceCollection servies)
    {
        return servies.AddScoped<IContactRepository, ContactRepository>();
    }
}
