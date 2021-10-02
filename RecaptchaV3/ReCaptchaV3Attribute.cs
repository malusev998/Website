using System;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace RecaptchaV3;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class ReCaptchaV3Attribute : Attribute, IFilterFactory
{
    public bool IsReusable => false;

    public float? Threshold = null;

    public IFilterMetadata CreateInstance(IServiceProvider serviceProvider)
    {
        var service = serviceProvider.GetRequiredService<IReCaptchaService>();

        return new ReCaptchaV3AuthorizationFilter(service, Threshold);
    }
}
