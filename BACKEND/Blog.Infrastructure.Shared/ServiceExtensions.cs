using Blog.Core.Application.Interfaces.Services;
using Blog.Infrastructure.Shared.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Blog.Infrastructure.Shared
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddSharedInfrastructure(this IServiceCollection services)
        {
            services.AddTransient<IContextAccessorWrapper, ContextAccessorWrapper>();

            return services;
        }
    }
}
