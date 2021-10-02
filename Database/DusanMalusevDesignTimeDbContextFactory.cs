using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Database;

public class DusanMalusevDesignTimeDbContextFactory : IDesignTimeDbContextFactory<DusanMalusevDbContext>
{
    public DusanMalusevDbContext CreateDbContext(string[] args)
    {
        string environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");


        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "..", "DusanMalusev"))
            .AddJsonFile("appsettings.json")
             .AddJsonFile($"appsettings.{environment}.json", optional: true)
            .AddEnvironmentVariables()
            .Build();

        var builder = new DbContextOptionsBuilder<DusanMalusevDbContext>();

        var connectionString = configuration.GetConnectionString(ServiceProvider.ConnectionStringKey);

        ServiceProvider.AddDbContext(builder, connectionString, true);

        return new DusanMalusevDbContext(builder.Options);
    }
}
