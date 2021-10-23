using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace RecaptchaV3
{
    public class ReCaptchaV3AuthorizationFilter : IAsyncActionFilter
    {
        private readonly IReCaptchaService _service;
        private readonly float? _threshold;
        private readonly string _headerName;

        public ReCaptchaV3AuthorizationFilter(IReCaptchaService service, string headerName, float? threshold)
        {
            _service = service;
            _threshold = threshold;
            _headerName = headerName;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var succeeded = context.HttpContext.Request.Headers.TryGetValue(_headerName, out var values);

            if (!succeeded || values.Count != 1)
            {
                context.Result = new ContentResult
                {
                    Content = JsonSerializer.Serialize(new { message = $"{_headerName} has not been sent" }),
                    ContentType = "application/json",
                    StatusCode = StatusCodes.Status428PreconditionRequired
                };
                return;
            }

            var token = values[0];

            var ip = context.HttpContext.Connection.RemoteIpAddress?.ToString();

            var result = await _service.VerifyAsync(
                token,
                ip,
                _threshold,
                context.HttpContext.RequestAborted
            );

            if (!result)
            {
                context.Result = new ContentResult
                {
                    Content = JsonSerializer.Serialize(new { message = "Invalid ReCaptcha" }),
                    ContentType = "application/json",
                    StatusCode = StatusCodes.Status428PreconditionRequired
                };

                return;
            }

            await next();
        }
    }
}
