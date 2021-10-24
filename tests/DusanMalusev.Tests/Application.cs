using System;
using System.Linq;
using System.Net.Http;
using System.Net.Mime;
using System.Threading.Tasks;
using Database;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;
using NodaTime;
using NodaTime.Testing;
using RecaptchaV3;
using Xunit.Abstractions;

namespace DusanMalusev.Tests
{
    public class Application : WebApplicationFactory<Startup>, IDisposable
    {
        private static readonly Random Random = new();

        public static IConfiguration Configuration { get; }

        public ITestOutputHelper Output { get; set; }

        static Application()
        {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(Environment.CurrentDirectory)
                .AddJsonFile("appsettings.Testing.json", false)
                .AddEnvironmentVariables()
                .Build();
        }

        public Application()
        {
            Environment.SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", "Testing", EnvironmentVariableTarget.Process);
        }

        protected override IHostBuilder CreateHostBuilder()
        {
            return new HostBuilder()
                .ConfigureAppConfiguration(config =>
                {
                    config
                        .SetBasePath(Environment.CurrentDirectory)
                        .AddJsonFile("appsettings.Testing.json", false)
                        .AddEnvironmentVariables();
                })
                .ConfigureServices((context, services) =>
                {
                    services.AddSingleton<IClock>(_ => new FakeClock(
                        Instant.FromUtc(2021, 11, 11, 11, 00),
                        Duration.FromSeconds(1)
                    ));

                    var connectionString =
                        context.Configuration.GetConnectionString(Database.ServiceProvider.ConnectionStringKey) +
                        "Database=dusanmalusev_" + Random.NextInt64();

                    services.AddDatabase(
                        connectionString,
                        context.Configuration.GetValue<bool>("Postgres:Development"),
                        context.Configuration.GetValue<int>("Postgres:MinBatchSize"),
                        context.Configuration.GetValue<int>("Postgres:MaxBatchSize")
                    );

                    CreateDatabase(services)
                        .ConfigureAwait(false)
                        .GetAwaiter()
                        .GetResult();
                })
                .ConfigureWebHostDefaults(builder =>
                {
                    builder.UseTestServer()
                        .UseStartup<Startup>();

                    builder.ConfigureTestServices(services =>
                    {
                        services.AddReCaptchaV3Testing();
                        services.AddSingleton<IClock>(_ => new FakeClock(
                            Instant.FromUtc(2021, 11, 11, 11, 00),
                            Duration.FromSeconds(1)
                        ));

                        var connectionString =
                            Configuration.GetConnectionString(Database.ServiceProvider.ConnectionStringKey) +
                            "Database=dusanmalusev_" + Random.NextInt64();

                        services.AddDatabase(
                            connectionString,
                            Configuration.GetValue<bool>("Postgres:Development"),
                            Configuration.GetValue<int>("Postgres:MinBatchSize"),
                            Configuration.GetValue<int>("Postgres:MaxBatchSize")
                        );
                    });
                })
                .ConfigureLogging(logging =>
                {
                    logging.ClearProviders();
                    logging.AddXUnit(Output);
                });
        }

        protected override void ConfigureClient(HttpClient client)
        {
            var headerName = Configuration.GetValue<string>("Google:ReCaptchaV3:HeaderName");

            base.ConfigureClient(client);

            client.DefaultRequestHeaders.Add(headerName, new[] { "RecaptchaDummyToken" });
        }

        public async Task<HttpClient> CreateCsrfClientAsync()
        {
            var cookieName = Configuration.GetValue<string>("CsrfCookieOptions:Name");
            var headerName = Configuration.GetValue<string>("CsrfCookieOptions:HeaderName");

            var client = CreateClient();
            var testResult = await client.GetAsync("/csrf-token"); // the endpoint we created before
            var cookies = testResult.Headers.GetValues(HeaderNames.SetCookie).ToList();

            var token = cookies
                .Single(x => x.StartsWith(cookieName))[$"{cookieName}=".Length..]
                .Split(";")[0];


            client.DefaultRequestHeaders.Add(HeaderNames.Accept, MediaTypeNames.Application.Json);
            client.DefaultRequestHeaders.Add(headerName, new[] { token });
            client.DefaultRequestHeaders.Add(HeaderNames.Cookie, cookies);
            return client;
        }

        private static async Task CreateDatabase(IServiceCollection services)
        {
            var provider = services.BuildServiceProvider();

            await using var scope = provider.CreateAsyncScope();

            var context = scope.ServiceProvider.GetRequiredService<DusanMalusevDbContext>();

            await context.Database.MigrateAsync();
        }


        public new void Dispose()
        {
            using (var scope = Services.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<DusanMalusevDbContext>();
                context.Database.EnsureDeleted();
            }

            base.Dispose();
        }
    }
}