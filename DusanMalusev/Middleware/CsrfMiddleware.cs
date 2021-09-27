using DusanMalusev.Options;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.Extensions.Options;

namespace DusanMalusev.Middleware;

public class CsrfMiddleware
{
    private readonly RequestDelegate _next;
    private readonly IAntiforgery _csrf;
    private readonly CsrfCookie _csrfCookieOptions;

    public CsrfMiddleware(RequestDelegate next, IAntiforgery csrf, IOptions<CsrfCookie> csrfCookieOptions)
    {
        _next = next;
        _csrf = csrf;
        _csrfCookieOptions = csrfCookieOptions.Value;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        string path = context.Request.Path.Value;

        var tokens = _csrf.GetAndStoreTokens(context);

        context.Response.Cookies.Append(_csrfCookieOptions.Name, tokens.RequestToken,
            new CookieOptions()
            {
                Domain = _csrfCookieOptions.Domain,
                Path = _csrfCookieOptions.Path,
                SameSite = SameSiteMode.Strict,
                IsEssential = true,
                Secure = _csrfCookieOptions.Secure,
                MaxAge = TimeSpan.FromMinutes(_csrfCookieOptions.ExpireIn),
                HttpOnly = false
            });

        await _next(context);
    }
}
