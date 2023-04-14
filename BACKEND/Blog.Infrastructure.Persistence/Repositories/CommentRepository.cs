using Blog.Core.Application.Interfaces.Repositories;
using Blog.Core.Domain.Entities;
using Blog.Infrastructure.Persistence.Context;

namespace Blog.Infrastructure.Persistence.Repositories
{
    public class CommentRepository : GeneryRepository<Comment>, ICommentRepository
    {
        public CommentRepository(BlogContext context) : base(context) { }
    }
}
