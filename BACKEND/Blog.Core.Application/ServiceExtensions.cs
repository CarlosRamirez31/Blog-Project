using Blog.Core.Application.Behaviours;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Blog.Core.Application
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddApplicationCore(this IServiceCollection services) 
        {
            services.AddMediatR(Assembly.GetExecutingAssembly());
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehaivor<,>));

            return services;
        }
    }
}
