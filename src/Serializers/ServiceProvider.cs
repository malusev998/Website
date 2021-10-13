using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.DependencyInjection;
using Serializers.Contracts;
using Serializers.Impl;

namespace Serializers
{
    public static class ServiceProvider
    {
        public static IServiceCollection AddSerializers(this IServiceCollection services)
        {
            return services
                .AddSingleton<ITicketSerializer<AuthenticationTicket>, AuthTicketSerializer>()
                .AddSingleton<ITicketDeserializer<AuthenticationTicket>, AuthTicketSerializer>();;
        }
    }    
}
