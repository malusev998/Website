var builder = WebApplication.CreateBuilder(args);


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



var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();
app.MapControllers();

app.Run();
