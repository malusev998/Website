using Database;
using DusanMalusev.Exceptions;
using DusanMalusev.Middleware;
using DusanMalusev.Options;
using Handlers;
using Microsoft.AspNetCore.HttpOverrides;
using NodaTime;
using RecaptchaV3;
using Repositories;
using Serilog;
using Serilog.Events;
using Validators;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
    .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Information)
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .CreateBootstrapLogger();

var builder = WebApplication.CreateBuilder(args);

try
{
    builder.Host.UseSerilog((context, services, configuration) => configuration
        .ReadFrom.Configuration(context.Configuration)
        .ReadFrom.Services(services)
        .Enrich.FromLogContext()
        .WriteTo.Console()
    );

    builder.Host.UseConsoleLifetime();

    builder.WebHost.UseKestrel(options =>
    {
        options.AllowSynchronousIO = false;
        options.DisableStringReuse = false;
        options.AddServerHeader = false;
    });

    builder.Host.ConfigureHostConfiguration(host =>
    {
        host.AddEnvironmentVariables(env =>
        {
            env.Prefix = "MALUSEV";
        });
    });

    // Add services to the container.
    builder.Services.AddRazorPages();

    builder.Services.AddControllers(options =>
    {
        options.Filters.Add<Handler>();
    });

    builder.Services.AddOptions<CsrfCookie>()
        .Bind(builder.Configuration.GetSection(CsrfCookie.Key))
        .ValidateDataAnnotations();

    builder.Services.AddOptions<ReCaptchaV3Settings>()
        .Bind(builder.Configuration.GetSection("Google:ReCaptchaV3"))
        .ValidateDataAnnotations();

    builder.Services.AddSingleton<IClock>(_ => SystemClock.Instance);

    builder.Services.AddDatabase(
       builder.Configuration.GetConnectionString(Database.ServiceProvider.ConnectionStringKey),
       builder.Configuration.GetValue<bool>("Postgres:Development"),
       builder.Configuration.GetValue<int>("Postgres:MinBatchSize"),
       builder.Configuration.GetValue<int>("Postgres:MaxBatchSize")
   ).AddRepositories();

    builder.Services
        .AddValidators()
        .AddMediatr();

    builder.Services.AddReCaptchaV3();

    builder.Services.AddAntiforgery(options =>
    {
        var section = builder.Configuration.GetRequiredSection(CsrfCookie.Key);
        var csrfCookieOptions = new CsrfCookie();
        section.Bind(csrfCookieOptions);

        options.SuppressXFrameOptionsHeader = false;

        options.Cookie.Domain = csrfCookieOptions.Domain;
        options.Cookie.Path = csrfCookieOptions.Path;
        options.Cookie.IsEssential = true;
        options.Cookie.SecurePolicy = csrfCookieOptions.Secure ? CookieSecurePolicy.Always : CookieSecurePolicy.SameAsRequest;
        options.Cookie.HttpOnly = false;
        options.Cookie.MaxAge = TimeSpan.FromMinutes(csrfCookieOptions.ExpireIn);
        options.Cookie.SameSite = SameSiteMode.Strict;

        options.HeaderName = csrfCookieOptions.HeaderName;
        options.FormFieldName = csrfCookieOptions.FieldName;
    });

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (!app.Environment.IsDevelopment())
    {
        app.UseExceptionHandler("/Error");
        // app.UseHsts();
    }

    if (app.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
        app.UseSerilogRequestLogging();
    }


    app.UseForwardedHeaders(new ForwardedHeadersOptions
    {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor |
                           ForwardedHeaders.XForwardedProto |
                           ForwardedHeaders.XForwardedHost
    });

    app.UseMiddleware<CsrfMiddleware>();

    // app.UseHttpsRedirection();
    app.UseStaticFiles();

    app.UseRouting();

    app.UseAuthorization();

    app.MapRazorPages();
    app.MapControllers();

    await app.RunAsync();
}
catch (Exception e)
{
    Log.Fatal(e, "Host terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}
