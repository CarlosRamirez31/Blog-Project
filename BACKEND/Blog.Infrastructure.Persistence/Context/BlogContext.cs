using Blog.Core.Application.Interfaces.Services;
using Blog.Core.Domain.Common;
using Blog.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Blog.Infrastructure.Persistence.Context
{
    public class BlogContext : DbContext
    {
        private readonly IContextAccessorWrapper _contextAccessorWrapper;

        public BlogContext(DbContextOptions<BlogContext> options, IContextAccessorWrapper contextAccessorWrapper)
            : base(options)
        {
            _contextAccessorWrapper = contextAccessorWrapper;
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Comment> Comments { get; set; }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var user = _contextAccessorWrapper.GetContextName();

            foreach (var entry in ChangeTracker.Entries<AuditoryBaseEntity>())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.Created = DateTime.Now;
                        entry.Entity.CreatedBy = user;
                        break;
                    case EntityState.Modified:
                        entry.Entity.LastModified = DateTime.Now;
                        entry.Entity.LastModifiedBy = user;
                        break;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(modelBuilder);
        }
    }
}
