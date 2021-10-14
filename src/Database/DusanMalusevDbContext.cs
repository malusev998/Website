using Microsoft.EntityFrameworkCore;
using Models;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Database;

public class DusanMalusevDbContext : DbContext
{
    public virtual DbSet<Contact> Contacts { get; set; } = null!;

    public virtual DbSet<Subscription> Subscriptions { get; set; } = null!;

    public DusanMalusevDbContext(DbContextOptions<DusanMalusevDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.HasDefaultSchema("public");
        builder.ApplyConfigurationsFromAssembly(typeof(DusanMalusevDbContext).Assembly);
        builder.HasPostgresExtension("pg_stat_statements");
        builder.HasPostgresExtension("hstore");
        builder.HasPostgresExtension("uuid-ossp");
        builder.HasPostgresExtension("pgcrypto");

        builder.UseHiLo();
        builder.Model.SetValueGenerationStrategy(NpgsqlValueGenerationStrategy.SequenceHiLo);
        base.OnModelCreating(builder);
    }
}