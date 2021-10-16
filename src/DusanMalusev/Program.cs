using DusanMalusev;
using Serilog;
using Serilog.Events;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
    .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Information)
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .CreateBootstrapLogger();


var builder = Host.CreateDefaultBuilder(args)
    .UseDefaultServiceProvider((context, options) =>
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
    })
    .ConfigureAppConfiguration((context, config) =>
    {
        config.AddEnvironmentVariables(env => { env.Prefix = "MALUSEV"; });

        if (!context.HostingEnvironment.IsProduction()) return;

        config.SetBasePath("/etc/dusanmalusev");
        config.AddJsonFile("appsettings.json", false, true);
    })
    .UseSerilog((context, services, configuration) => configuration
        .ReadFrom.Configuration(context.Configuration)
        .ReadFrom.Services(services)
        .Enrich.FromLogContext()
        .WriteTo.Console()
    )
    .UseConsoleLifetime()
    .ConfigureWebHostDefaults(builder => { builder.UseStartup<Startup>(); });

try
{
    var app = builder.Build();

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