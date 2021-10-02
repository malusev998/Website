using System;
using System.Net.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Polly;

namespace RecaptchaV3;

public static class ServiceProvider
{
    internal const string ClientName = "ReCaptchaV3Client";

    public static IServiceCollection AddReCaptchaV3(this IServiceCollection services, int retries = 3, int wait = 100)
    {
        services.AddHttpClient<IReCaptchaService, ReCaptchaV3Service>(ClientName, (provider, client) =>
            {
                var options = provider.GetRequiredService<IOptions<ReCaptchaV3Settings>>().Value;

                client.BaseAddress = new Uri(options.Url);

                client.DefaultRequestHeaders.Add("User-Agent", options.UserAgent);
                client.DefaultRequestHeaders.Add("Accept", "application/json");
            })
            .ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler
            {
                AllowAutoRedirect = false,
                UseCookies = false,
            })
            .AddTransientHttpErrorPolicy(p =>
                p.WaitAndRetryAsync(retries, _ => TimeSpan.FromMilliseconds(wait))
            );

        return services;
    }
}