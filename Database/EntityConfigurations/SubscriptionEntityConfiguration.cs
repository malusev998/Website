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
                .UseIdentityAlwaysColumn()
                .UseHiLo();

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
                .ValueGeneratedOnAdd();

            builder.Property(t => t.UpdatedAt)
                .IsRequired()
                .ValueGeneratedOnAddOrUpdate();

            builder.HasIndex(t => t.Email)
                .IsCreatedConcurrently(true)
                .HasSortOrder(SortOrder.Descending)
                .IsUnique(true);
        }
    }
}
