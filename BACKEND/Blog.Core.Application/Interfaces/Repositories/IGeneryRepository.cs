﻿using Blog.Core.Application.Parameters;

namespace Blog.Core.Application.Interfaces.Repository
{
    public interface IGeneryRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task<T> AddAsync(T entity);
        Task UpdateAsync(int id, T entity);
        Task DeleteAsync(T entity);
        IQueryable<TD> Ordering<TD>(PaginationRequest request, IQueryable<TD> queryable, bool paginate)
            where TD : class;
    }
}
