using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace RecaptchaV3
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class ReCaptchaV3Attribute : Attribute, IFilterFactory
    {
        public bool IsReusable => true;

        public float? Threshold = null;

        public IFilterMetadata CreateInstance(IServiceProvider serviceProvider)
        {
            var service = serviceProvider.GetRequiredService<IReCaptchaService>();
            var options = serviceProvider.GetRequiredService<IOptions<ReCaptchaV3Settings>>().Value;

            var header = options.HeaderName;

            return new ReCaptchaV3AuthorizationFilter(service, header, Threshold);
        }
    }
}
