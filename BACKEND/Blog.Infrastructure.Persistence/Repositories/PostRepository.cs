using Blog.Core.Application.Interfaces.Repositories;
using Blog.Core.Domain.Entities;
using Blog.Infrastructure.Persistence.Context;

namespace Blog.Infrastructure.Persistence.Repositories
{
    public class PostRepository : GeneryRepository<Post>, IPostRepository
    {
        public PostRepository(BlogContext context): base(context)
        {
        }
    }
}
