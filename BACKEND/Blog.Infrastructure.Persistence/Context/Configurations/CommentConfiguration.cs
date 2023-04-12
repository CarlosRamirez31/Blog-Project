using Blog.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Blog.Infrastructure.Persistence.Context.Configurations
{
    public class CommentConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.HasKey(x => x.CommentId);

            builder.HasOne(s => s.Post)
                .WithMany(c => c.Comments)
                .HasForeignKey(s => s.PostId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("Pk_Comment_Post");

            builder.Property(x => x.Content).HasMaxLength(255);

            builder.Ignore(x => x.LastModifiedBy);
        }
    }
}
