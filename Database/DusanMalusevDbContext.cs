using Microsoft.EntityFrameworkCore;
using Models;

namespace Database;

public class DusanMalusevDbContext : DbContext
{
    public DbSet<Contact> Contacts { get; set; }
    
    public DbSet<Subscription> Subscriptions { get; set; }
    
    // public DbSet<Visit> Visits { get; set; }

    public DusanMalusevDbContext(DbContextOptions<DusanMalusevDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.HasPostgresExtension("pg_stat_statements");
        builder.HasPostgresExtension("hstore");

        builder.HasPostgresEnum<VisitProvider>();

        builder.UseIdentityColumns();
        builder.UseHiLo();
        builder.HasDefaultSchema("public");
    }
}