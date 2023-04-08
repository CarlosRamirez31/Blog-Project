using Blog.Core.Application.Interfaces.Repositories;
using Blog.Core.Application.Interfaces.Repository;
using Blog.Infrastructure.Persistence.Context;
using Blog.Infrastructure.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Blog.Infrastructure.Persistence
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddPersistenceInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<BlogContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("BlogConnection"),
                    x => x.MigrationsAssembly(typeof(BlogContext).Assembly.FullName))
                );

            services.AddTransient(typeof(IGeneryRepository<>), typeof(GeneryRepository<>));
            services.AddTransient<ICategoryRepository, CategoryRepository>();
            services.AddTransient<IPostRepository, PostRepository>();

            return services;
        }
    }
}
