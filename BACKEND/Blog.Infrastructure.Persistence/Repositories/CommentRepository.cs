using Blog.Core.Application.Interfaces.Repositories;
using Blog.Core.Domain.Entities;
using Blog.Infrastructure.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace Blog.Infrastructure.Persistence.Repositories
{
    public class CommentRepository : GeneryRepository<Comment>, ICommentRepository
    {
        private readonly BlogContext _context;

        public CommentRepository(BlogContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Comment>> GetAllCommentAsync(int postId)
        {
            return await _context.Set<Comment>().Where(x => x.PostId.Equals(postId)).ToListAsync();
        }
    }
}
