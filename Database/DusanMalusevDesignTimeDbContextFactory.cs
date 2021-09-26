using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Database;

public class DusanMalusevDesignTimeDbContextFactory : IDesignTimeDbContextFactory<DusanMalusevDbContext>
{
    public DusanMalusevDbContext CreateDbContext(string[] args)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.Development.json")
            .AddEnvironmentVariables()
            .Build();

        var builder = new DbContextOptionsBuilder<DusanMalusevDbContext>();

        var connectionString = configuration.GetConnectionString(ServiceProvider.ConnectionStringKey);

        ServiceProvider.AddDbContext(builder, connectionString, true);

        return new DusanMalusevDbContext(builder.Options);
    }
}
