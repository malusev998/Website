using Database;
using Repositories;
using Validators;
using Handlers;
using Serilog;
using Serilog.Events;
using NodaTime;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
    .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Warning)
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

    builder.Services.AddControllers();

    builder.Services.AddSingleton<IClock>(p => SystemClock.Instance);

    builder.Services.AddDatabase(
       builder.Configuration.GetConnectionString(Database.ServiceProvider.ConnectionStringKey),
       builder.Configuration.GetValue<bool>("Postgres:Development"),
       minBatchSize: builder.Configuration.GetValue<int>("Postgres:MinBatchSize"),
       maxBatchSize: builder.Configuration.GetValue<int>("Postgres:MaxBatchSize")
   ).AddRepositories();

    builder.Services
        .AddValidators()
        .AddMediatr();

    var app = builder.Build();


    // Configure the HTTP request pipeline.
    if (!app.Environment.IsDevelopment())
    {
        app.UseExceptionHandler("/Error");
        app.UseHsts();
    }

    if (app.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
        app.UseSerilogRequestLogging();
    }

    app.UseHttpsRedirection();
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