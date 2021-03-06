using Database.ValueGenerators;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models;

namespace Database.EntityConfigurations
{
    public class ContactEntityConfiguration : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.Property(t => t.Id)
                .UseHiLo("contact_hilo");

            builder.Property(t => t.Name)
                .HasMaxLength(50)
                .IsUnicode()
                .IsRequired();

            builder.Property(t => t.Email)
                .HasMaxLength(255)
                .IsUnicode()
                .IsRequired();

            builder.Property(t => t.Subject)
                .HasMaxLength(200)
                .IsUnicode()
                .IsRequired();

            builder.Property(t => t.Message)
                .HasMaxLength(1000)
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

            builder.HasKey(t => t.Id);
        }
    }
}