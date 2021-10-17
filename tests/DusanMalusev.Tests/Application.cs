using System;
using System.Threading.Tasks;
using Database;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NodaTime;
using NodaTime.Testing;

namespace DusanMalusev.Tests
{
    public class Application : WebApplicationFactory<Startup>, IAsyncDisposable, IDisposable
    {
        private static readonly Random Random = new();

        public static IConfiguration? Configuration { get; set; }

        public Application()
        {
            Environment.SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", "Testing", EnvironmentVariableTarget.Process);
        }

        protected override IHostBuilder CreateHostBuilder()
        {
            return new HostBuilder()
                .ConfigureAppConfiguration(config =>
                {
                    config.AddJsonFile("appsettings.Testing.json", false)
                        .AddEnvironmentVariables();
                })
                .ConfigureServices((context, services) =>
                {
                    Configuration ??= context.Configuration;

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

                    CreateDatabase(services)
                        .ConfigureAwait(false)
                        .GetAwaiter()
                        .GetResult();
                }).ConfigureWebHostDefaults(builder =>
                {
                    builder.UseTestServer()
                        .UseStartup<Startup>();
                });
        }

        private async Task CreateDatabase(IServiceCollection services)
        {
            var provider = services.BuildServiceProvider();

            await using var scope = provider.CreateAsyncScope();

            var context = scope.ServiceProvider.GetRequiredService<DusanMalusevDbContext>();

            await context.Database.MigrateAsync();
        }

        public async ValueTask DisposeAsync()
        {
            await using var scope = Services.CreateAsyncScope();

            var context = scope.ServiceProvider.GetRequiredService<DusanMalusevDbContext>();

            await context.Database.EnsureDeletedAsync();
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
