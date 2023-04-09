using Blog.Core.Domain.Common;

namespace Blog.Core.Domain.Entities
{
    public class Comment 
    {
        public int CommentId { get; set; }
        public string? Content { get; set; }
        public int PostId { get; set; }
        public string? CreateBy { get; set; }
        public DateTime Created { get; set; }
        public DateTime? LastModified { get; set; }

        public Post? Post { get; set; }
    }
}
