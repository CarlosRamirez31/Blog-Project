using Blog.Core.Application.Dtos.Post;
using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Application.Parameters;
using Blog.Core.Application.Wrappers;
using Blog.Core.Domain.Entities;

namespace Blog.Core.Application.Interfaces.Repositories
{
    public interface IPostRepository : IGeneryRepository<Post>
    {
        Task<PageResponse<Post>> ListByFiltersAsync(FilterRequest filter);
    }
}
