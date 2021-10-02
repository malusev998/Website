using Microsoft.AspNetCore.Antiforgery;

namespace DusanMalusev.Middleware;

public class CsrfMiddleware
{
    private readonly IAntiforgery _csrf;
    private readonly RequestDelegate _next;

    public CsrfMiddleware(RequestDelegate next, IAntiforgery csrf)
    {
        _csrf = csrf;
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        _csrf.GetAndStoreTokens(context);

        await _next(context);
    }
}
