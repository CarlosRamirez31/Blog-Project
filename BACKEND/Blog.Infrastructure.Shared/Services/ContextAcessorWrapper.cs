using Blog.Core.Application.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace Blog.Infrastructure.Shared.Services
{
    public class ContextAccessorWrapper : IContextAccessorWrapper
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ContextAccessorWrapper(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetContextName()
        {
            var user = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (user is null)
                return "Unknown user";
            else
                return user;
        }
    }
}
