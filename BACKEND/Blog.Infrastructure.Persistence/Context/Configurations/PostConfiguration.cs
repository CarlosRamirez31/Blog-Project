using Blog.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Blog.Infrastructure.Persistence.Context.Configurations
{
    public class PostConfiguration : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.HasKey(x => x.PostId);

            builder.HasOne(p => p.Category)
                .WithMany(c => c.Posts)
                .HasForeignKey(p => p.CategoryId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("Pk_Post_Category");

            builder.Property(x => x.Title).HasMaxLength(100);
            builder.Property(x => x.Brief).HasMaxLength(120);
            builder.Property(x => x.Context).HasMaxLength(255);
        }
    }
}
