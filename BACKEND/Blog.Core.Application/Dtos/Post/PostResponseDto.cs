namespace Blog.Core.Application.Dtos.Post
{
    public class PostResponseDto
    {
        public int PostId { get; set; }
        public string? Title { get; set; }
        public string? Brief { get; set; }
        public string? Context { get; set; }
        public int? CategoryId { get; set; }
        public DateTime? Created { get; set; }
    }
}
