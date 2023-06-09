﻿using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Domain.Entities;

namespace Blog.Core.Application.Interfaces.Repositories
{
    public interface ICommentRepository : IGeneryRepository<Comment>
    {
        Task<IEnumerable<Comment>> GetAllCommentAsync(int postId);
    }
}
