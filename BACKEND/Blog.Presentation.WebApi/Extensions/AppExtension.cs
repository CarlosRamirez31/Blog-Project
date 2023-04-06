using Blog.Presentation.ApiWeb.Middleware;

namespace Blog.Presentation.WebApi.Extensions
{
    public static class AppExtension
    {
        public static void UseErrorHandlerMiddleware(this IApplicationBuilder app)
        {
            app.UseMiddleware<ErrorHandlerMiddleware>();
        }
    }
}
