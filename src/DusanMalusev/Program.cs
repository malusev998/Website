using System.Security.Cryptography.X509Certificates;
using Cache;
using Crypto;
using Database;
using DusanMalusev.Exceptions;
using DusanMalusev.Middleware;
using DusanMalusev.Options;
using DusanMalusev.Sessions;
using Handlers;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption.ConfigurationModel;
using Microsoft.AspNetCore.HttpOverrides;
using NodaTime;
using RecaptchaV3;
using Repositories;
using Serializers;
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
    builder.Host.UseDefaultServiceProvider((context, options) =>
    {
        if (context.HostingEnvironment.IsDevelopment())
        {
            options.ValidateOnBuild = true;
            options.ValidateScopes = true;
        }
        else
        {
            options.ValidateOnBuild = false;
            options.ValidateScopes = false;
        }
    });

    builder.Host.ConfigureHostConfiguration(config =>
    {
        config.AddEnvironmentVariables(env => { env.Prefix = "MALUSEV"; });

        if (!builder.Environment.IsProduction()) return;

        config.SetBasePath("/etc/dusanmalusev");
        config.AddJsonFile("appsettings.json", false, true);
    });

    builder.Host.UseSerilog((context, services, configuration) => configuration
        .ReadFrom.Configuration(context.Configuration)
        .ReadFrom.Services(services)
        .Enrich.FromLogContext()
        .WriteTo.Console()
    );

    builder.Host.UseConsoleLifetime();


    // Add services to the container.
    builder.Services.AddDataProtection()
        .PersistKeysToFileSystem(new DirectoryInfo(builder.Configuration["Keys:StoragePath"]))
        .ProtectKeysWithCertificate(new X509Certificate2(
            builder.Configuration["Keys:Certificate:Path"],
            builder.Configuration["Keys:Certificate:Password"])
        )
        .UseCryptographicAlgorithms(new AuthenticatedEncryptorConfiguration
        {
            EncryptionAlgorithm = builder.Environment.IsDevelopment()
                ? EncryptionAlgorithm.AES_256_CBC
                : EncryptionAlgorithm.AES_256_GCM,
            ValidationAlgorithm = ValidationAlgorithm.HMACSHA512,
        });
    builder.Services.AddRazorPages();

    builder.Services.AddControllers(options =>
    {
        options.Filters.Add<Handler>();
        options.RespectBrowserAcceptHeader = true;
        options.ReturnHttpNotAcceptable = true;
    });

    builder.Services.AddOptions<CsrfCookie>()
        .Bind(builder.Configuration.GetSection(CsrfCookie.Key))
        .ValidateDataAnnotations();

    builder.Services.AddOptions<ReCaptchaV3Settings>()
        .Bind(builder.Configuration.GetSection("Google:ReCaptchaV3"))
        .ValidateDataAnnotations();

    builder.Services.AddSingleton<IClock>(_ => SystemClock.Instance)
        .AddRedisCache(
            builder.Configuration.GetConnectionString("DefaultRedis"),
            builder.Configuration.GetConnectionString("CacheRedis")
        )
        .AddDatabase(
            builder.Configuration.GetConnectionString(Database.ServiceProvider.ConnectionStringKey),
            builder.Configuration.GetValue<bool>("Postgres:Development"),
            builder.Configuration.GetValue<int>("Postgres:MinBatchSize"),
            builder.Configuration.GetValue<int>("Postgres:MaxBatchSize")
        ).AddRepositories()
        .AddValidators()
        .AddMediatr()
        .AddReCaptchaV3()
        .AddCrypto()
        .AddSerializers()
        .AddSingleton<ITicketStore, DistributedSessionStore>()
        .AddAntiforgery(options =>
        {
            var section = builder.Configuration.GetRequiredSection(CsrfCookie.Key);
            var csrfCookieOptions = new CsrfCookie();
            section.Bind(csrfCookieOptions);

            options.SuppressXFrameOptionsHeader = false;

            options.Cookie.Domain = csrfCookieOptions.Domain;
            options.Cookie.Path = csrfCookieOptions.Path;
            options.Cookie.IsEssential = true;
            options.Cookie.SecurePolicy =
                csrfCookieOptions.Secure ? CookieSecurePolicy.Always : CookieSecurePolicy.SameAsRequest;
            options.Cookie.HttpOnly = true;
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
                           ForwardedHeaders.XForwardedHost,
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