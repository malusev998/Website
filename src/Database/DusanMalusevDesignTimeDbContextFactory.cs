using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Database
{
    public class DusanMalusevDesignTimeDbContextFactory : IDesignTimeDbContextFactory<DusanMalusevDbContext>
    {
        public DusanMalusevDbContext CreateDbContext(string[] args)
        {
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Development";

            if (environment is null)
            {
                throw new ArgumentNullException("ASPNETCORE_ENVIRONMENT cannot be null");
            }

            var path = Path.GetFullPath(environment switch
            {
                "Development" => Path.Combine(Directory.GetCurrentDirectory(), "..", "DusanMalusev"),
                "Production" => Path.Combine("/", "etc", "dusanmalusev"),
                _ => throw new Exception("Invalid ASPNETCORE_ENVIRONMENT")
            });

            var configuration = new ConfigurationBuilder()
                .SetBasePath(path)
                .AddJsonFile("appsettings.json", true)
                .AddJsonFile($"appsettings.{environment}.json", optional: true)
                .AddCommandLine(args)
                .AddEnvironmentVariables()
                .Build();

            var builder = new DbContextOptionsBuilder<DusanMalusevDbContext>();

            var connectionString = configuration.GetConnectionString(ServiceProvider.ConnectionStringKey);

            ServiceProvider.AddDbContext(builder, connectionString, true);

            return new DusanMalusevDbContext(builder.Options);
        }
    }
}
