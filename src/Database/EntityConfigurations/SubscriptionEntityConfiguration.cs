using Database.ValueGenerators;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Database.EntityConfigurations
{
    public class SubscriptionEntityConfiguration : IEntityTypeConfiguration<Subscription>
    {
        public void Configure(EntityTypeBuilder<Subscription> builder)
        {
            builder.HasKey(t => t.Id);

            builder.Property(t => t.Id)
                .UseHiLo("subscription_hilo");

            builder.Property(t => t.Name)
                .HasMaxLength(50)
                .IsUnicode()
                .IsRequired();

            builder.Property(t => t.Email)
                .HasMaxLength(255)
                .IsUnicode()
                .IsRequired();

            builder.Property(t => t.CreatedAt)
                .IsRequired()
                .HasValueGenerator<ZonedDateTimeGenerator>()
                .ValueGeneratedOnAdd();

            builder.Property(t => t.UpdatedAt)
                .IsRequired(false)
                .HasValueGenerator<ZonedDateTimeGenerator>()
                .ValueGeneratedOnUpdate();
            
            builder.HasIndex(t => t.Email)
                .IsCreatedConcurrently()
                .HasSortOrder(SortOrder.Descending)
                .IsUnique();
        }
    }
}