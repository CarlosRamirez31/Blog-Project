using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Domain.Entities;

namespace Blog.Core.Application.Interfaces.Repositories
{
    public interface IPostRepository : IGeneryRepository<Post>
    {
    }
}
