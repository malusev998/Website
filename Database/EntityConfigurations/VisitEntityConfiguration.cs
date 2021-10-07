using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models;

namespace Database.EntityConfigurations
{
    public class VisitEntityConfiguration : IEntityTypeConfiguration<Visit>
    {
        public void Configure(EntityTypeBuilder<Visit> builder)
        {
            builder.HasKey(t => t.Id);

            builder.Property(t => t.Id)
                .UseIdentityAlwaysColumn()
                .UseHiLo();
            
            builder.Property(t => t.Count)
                .IsRequired()
                .HasDefaultValue(0);

            builder.Property(t => t.Email)
                .HasMaxLength(255)
                .IsRequired()
                .IsUnicode();

            builder.Property(t => t.UserName)
                .HasMaxLength(255)
                .IsRequired()
                .IsUnicode();

            builder.Property(t => t.Provider)
                .IsRequired();

            builder.HasIndex(t => new { t.Email, t.Provider, t.UserName })
                .IsUnique();

            builder.HasIndex(t => t.Provider);
            builder.HasIndex(t => t.Email);
        }
    }
}