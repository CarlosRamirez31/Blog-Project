using Blog.Core.Domain.Common;

namespace Blog.Core.Domain.Entities
{
    public class Post : AuditoryBaseEntity
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string? Brief { get; set; }
        public string Content { get; set; }
        public string? ImagePath { get; set; }
        public int? CategoryId { get; set; }

        public Category? Category { get; set; }
        public IEnumerable<Comment>? Comments { get; set; }
    }
}
