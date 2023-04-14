namespace Blog.Core.Application.Dtos.Comment
{
    public class CommentResponseDto
    {
        public int CommentId { get; set; }
        public string? Content { get; set; }
        public int PostId { get; set; }
    }
}
