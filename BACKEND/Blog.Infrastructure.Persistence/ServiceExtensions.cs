using Blog.Infrastructure.Persistence.Context;
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

            return services;
        }
    }
}
