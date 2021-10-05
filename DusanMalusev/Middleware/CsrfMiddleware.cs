using DusanMalusev.Options;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.Extensions.Options;

namespace DusanMalusev.Middleware
{
    public class CsrfMiddleware
    {
        private readonly IAntiforgery _csrf;
        private readonly RequestDelegate _next;
        private readonly CsrfCookie _cookieSettings;

        public CsrfMiddleware(RequestDelegate next, IAntiforgery csrf, IOptions<CsrfCookie> options)
        {
            _csrf = csrf;
            _next = next;
            _cookieSettings = options.Value;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var set = _csrf.GetAndStoreTokens(context);

            context.Response.Cookies.Append(_cookieSettings.Name, set.RequestToken!,
                new CookieOptions
                {
                    HttpOnly = false,
                    Path = _cookieSettings.Path,
                    Domain = _cookieSettings.Domain,
                    IsEssential = true,
                    MaxAge = TimeSpan.FromMinutes(_cookieSettings.ExpireIn),
                    SameSite = SameSiteMode.Strict,
                    Secure = _cookieSettings.Secure,
                });

            await _next(context);
        }
    }
}
