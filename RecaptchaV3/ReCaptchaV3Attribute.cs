using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace RecaptchaV3
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false)]
    public class ReCaptchaV3Attribute : Attribute, IFilterFactory
    {
        public bool IsReusable => false;

        public float Threshold = 0.5f;

        public IFilterMetadata CreateInstance(IServiceProvider serviceProvider)
        {
            var service = serviceProvider.GetRequiredService<IReCaptchaService>();

            return new ReCaptchaV3AuthorizationFilter(service, Threshold);
        }
    }
}
