using DusanMalusev.Options;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.Extensions.Options;

namespace DusanMalusev.Middleware;

public class CsrfMiddleware : IMiddleware
{
    private readonly IAntiforgery _csrf;
    private readonly CsrfCookie _csrfCookieOptions;

    public CsrfMiddleware( IAntiforgery csrf, IOptions<CsrfCookie> csrfCookieOptions)
    {
        _csrf = csrf;
        _csrfCookieOptions = csrfCookieOptions.Value;
    }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        string path = context.Request.Path.Value;

        var tokens = _csrf.GetAndStoreTokens(context);

        //context.Response.Cookies.Append(_csrfCookieOptions.Name, tokens.RequestToken,
        //    new CookieOptions()
        //    {
        //        Domain = _csrfCookieOptions.Domain,
        //        Path = _csrfCookieOptions.Path,
        //        SameSite = SameSiteMode.Strict,
        //        IsEssential = true,
        //        Secure = _csrfCookieOptions.Secure,
        //        MaxAge = TimeSpan.FromMinutes(_csrfCookieOptions.ExpireIn),
        //        HttpOnly = false
        //    });

        await next(context);
    }
}
