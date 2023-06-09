﻿using Blog.Core.Application.Helpers;
using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Application.Parameters;
using Blog.Infrastructure.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System.Linq.Dynamic.Core;

namespace Blog.Infrastructure.Persistence.Repositories
{
    public class GeneryRepository<T> : IGeneryRepository<T> where T : class
    {
        private readonly BlogContext _context;

        public GeneryRepository(BlogContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<T> AddAsync(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task UpdateAsync(int id, T entity)
        {
            var entry = await _context.Set<T>().FindAsync(id);
            _context.Entry(entry!).CurrentValues.SetValues(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(T entity)
        {
            _context.Set<T>().Remove(entity);
            await _context.SaveChangesAsync();
        }

        public IQueryable<TD> Ordering<TD>(PaginationRequest request, IQueryable<TD> queryable, bool paginate = false) where TD : class
        {
            IQueryable<TD> queryDto = (request.Order == "asc") ? queryable.OrderBy($"{request.Sort} ascending")
                : queryable.OrderBy($"{request.Sort} descending");

            if (!paginate) queryDto = queryDto.Paginate(request);

            return queryDto;
        }
    }
}
