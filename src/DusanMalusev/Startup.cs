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
using Validators;

namespace DusanMalusev
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDataProtection()
                .PersistKeysToFileSystem(new DirectoryInfo(_configuration["Keys:StoragePath"]))
                .ProtectKeysWithCertificate(new X509Certificate2(
                    _configuration["Keys:Certificate:Path"],
                    _configuration["Keys:Certificate:Password"])
                )
                .UseCryptographicAlgorithms(new AuthenticatedEncryptorConfiguration
                {
                    // EncryptionAlgorithm = _hostEnvironment.IsProduction()
                    //     ? EncryptionAlgorithm.AES_256_GCM
                    //     : EncryptionAlgorithm.AES_256_CBC,
                    ValidationAlgorithm = ValidationAlgorithm.HMACSHA512,
                });

            services.AddRazorPages();

            services.AddControllers(options =>
            {
                options.Filters.Add<Handler>();
                options.RespectBrowserAcceptHeader = true;
                options.ReturnHttpNotAcceptable = true;
            });

            services.AddOptions<CsrfCookie>()
                .Bind(_configuration.GetSection(CsrfCookie.Key))
                .ValidateDataAnnotations();

            services.AddOptions<ReCaptchaV3Settings>()
                .Bind(_configuration.GetSection("Google:ReCaptchaV3"))
                .ValidateDataAnnotations();

            services.AddSingleton<IClock>(_ => SystemClock.Instance)
                .AddRedisCache(
                    _configuration.GetConnectionString("DefaultRedis"),
                    _configuration.GetConnectionString("CacheRedis")
                )
                .AddDatabase(
                    _configuration.GetConnectionString(Database.ServiceProvider.ConnectionStringKey),
                    _configuration.GetValue<bool>("Postgres:Development"),
                    _configuration.GetValue<int>("Postgres:MinBatchSize"),
                    _configuration.GetValue<int>("Postgres:MaxBatchSize")
                )
                .AddRepositories()
                .AddValidators()
                .AddMediatr()
                .AddReCaptchaV3()
                .AddCrypto()
                .AddSerializers()
                .AddSingleton<ITicketStore, DistributedSessionStore>()
                .AddAntiforgery(options =>
                {
                    var section = _configuration.GetRequiredSection(CsrfCookie.Key);
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
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Configure the HTTP request pipeline.
            if (!env.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
                // app.UseHsts();
            }

            if (env.IsDevelopment())
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

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapControllers();
            });
        }
    }
}