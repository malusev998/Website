using Microsoft.AspNetCore.Antiforgery;

namespace DusanMalusev.Middleware;

public class CsrfMiddleware : IMiddleware
{
    private readonly IAntiforgery _csrf;

    public CsrfMiddleware( IAntiforgery csrf)
    {
        _csrf = csrf;
    }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        _csrf.GetAndStoreTokens(context);

        await next(context);
    }
}
