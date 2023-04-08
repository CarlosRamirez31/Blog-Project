namespace Blog.Core.Application.Wrappers
{
    public class PageResponse<T>
    {
        public int? NumRecord { get; set; }
        public T? Items { get; set; }
    }
}
