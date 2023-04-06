using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Domain.Entities;
using Blog.Infrastructure.Persistence.Context;

namespace Blog.Infrastructure.Persistence.Repositories
{
    public class CategoryRepository : GeneryRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(BlogContext context): base(context) { }
    }
}
