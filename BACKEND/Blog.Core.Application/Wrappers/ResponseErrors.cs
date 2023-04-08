namespace Blog.Core.Application.Wrappers
{
    public class ResponseErrors<T>
    {
        public string? Message { get; set; }
        public List<string>? Error { get; set; }
    }
}
