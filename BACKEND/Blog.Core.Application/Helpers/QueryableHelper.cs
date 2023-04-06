using Blog.Core.Application.Parameters;

namespace Blog.Core.Application.Helpers
{
    public static class QueryableHelper
    {
        public static IQueryable<T> Paginate<T>(this IQueryable<T> query, PaginationRequest request)
        {
            return query.Skip((request.NumPage - 1) * request.Record).Take(request.Record);
        }
    }
}
