using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace RecaptchaV3;

public static class ServiceProvider
{
    public static IServiceCollection AddReCaptchaV3(this IServiceCollection services)
    {
        services.TryAddTransient<IReCaptchaService, ReCaptchaV3Service>();
        
        return services;
    }
}