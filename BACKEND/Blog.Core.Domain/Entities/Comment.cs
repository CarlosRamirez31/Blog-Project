using Blog.Core.Domain.Common;

namespace Blog.Core.Domain.Entities
{
    public class Comment : AuditoryBaseEntity
    {
        public int CommentId { get; set; }
        public string? Content { get; set; }
        public int PostId { get; set; }

        public Post Post { get; set; } = null!;
    }
}
