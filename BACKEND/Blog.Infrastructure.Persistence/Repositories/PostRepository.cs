using Blog.Core.Application.Interfaces.Repositories;
using Blog.Core.Application.Parameters;
using Blog.Core.Application.Wrappers;
using Blog.Core.Domain.Entities;
using Blog.Infrastructure.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace Blog.Infrastructure.Persistence.Repositories
{
    public class PostRepository : GeneryRepository<Post>, IPostRepository
    {
        private readonly BlogContext _context;

        public PostRepository(BlogContext context): base(context)
        {
            _context = context;
        }

        public async Task<PageResponse<Post>> ListByFiltersAsync(FilterRequest filter)
        {
            var response = new PageResponse<Post>();
            var post = _context.Set<Post>().AsQueryable().AsNoTracking();

            if(filter.NumFilter is not null && !string.IsNullOrEmpty(filter.TextFilter))
            {
                switch (filter.NumFilter)
                {
                    case 1:
                        post = post.Where(x => x.Title!.Contains(filter.TextFilter));
                        break;
                    case 2:
                        post = post.Where(x => x.Brief!.Contains(filter.TextFilter));
                        break;
                    case 3:
                        post = post.Where(x => x.Context!.Contains(filter.TextFilter));
                        break;
                }
            }

            if (!string.IsNullOrEmpty(filter.StarDate) && !string.IsNullOrEmpty(filter.EndDate))
            {
                post = post.Where(x => x.Created >= Convert.ToDateTime(filter.StarDate) &&
                    x.Created <= Convert.ToDateTime(filter.EndDate));
            }

            if (filter.Sort is null) filter.Sort = "PostId";

            response.NumRecord = await post.CountAsync();
            response.Items = await Ordering(filter, post, filter.Download.GetValueOrDefault()).ToListAsync();

            return response;
        }
    }
}
