using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Database;

public static class ServiceProvider
{
    public const string ConnectionStringKey = "DusanMalusevPostgres";

    public static IServiceCollection AddDatabase(this IServiceCollection services, string connectionString, bool isDevelopment = false, int minBatchSize = 10, int maxBatchSize = 100)
    {
        services.AddDbContextPool<DusanMalusevDbContext>(builder =>
        {
            AddDbContext(builder, connectionString, isDevelopment, minBatchSize, maxBatchSize);
        });


        return services;
    }

    internal static void AddDbContext(DbContextOptionsBuilder builder, string connectionString, bool isDevelopment, int minBatchSize = 10, int maxBatchSize = 100)
    {
        builder.EnableDetailedErrors(isDevelopment);
            builder.EnableSensitiveDataLogging(isDevelopment);
            builder.EnableServiceProviderCaching(isDevelopment);
            builder.EnableThreadSafetyChecks(!isDevelopment);
            builder.UseSnakeCaseNamingConvention();
            builder.UseNpgsql(connectionString, options =>
            {
                options.EnableRetryOnFailure(3);
                options.MaxBatchSize(maxBatchSize);
                options.MinBatchSize(minBatchSize);
                // options.SetPostgresVersion(Version.Parse("13"));
                options.UseNodaTime();
            });
    }
}
