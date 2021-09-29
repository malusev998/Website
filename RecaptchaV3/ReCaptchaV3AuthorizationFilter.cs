using Microsoft.AspNetCore.Mvc.Filters;

namespace RecaptchaV3
{
    public class ReCaptchaV3AuthorizationFilter : IAsyncAuthorizationFilter
    {
        private readonly IReCaptchaService _service;
        private readonly float _threshold;

        public ReCaptchaV3AuthorizationFilter(IReCaptchaService service, float threshold)
        {
            _service = service;
            _threshold = threshold;
        }

        public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {
           
            var method = context.HttpContext.Request.Method;

            if (method == "GET" || method == "OPTIONS")
            {
                return; 
            }

            var result = await _service.VerifyAsync("", cancellationToken: context.HttpContext.RequestAborted);
            throw new NotImplementedException();
        }
    }
}
