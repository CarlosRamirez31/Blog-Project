using Blog.Core.Domain.Common;

namespace Blog.Core.Domain.Entities
{
    public class Category : AuditoryBaseEntity
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }

        public IEnumerable<Post>? Posts { get; set; }
    }
}
