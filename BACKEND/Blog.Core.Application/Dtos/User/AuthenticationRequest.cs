namespace Blog.Core.Application.Dtos.User
{
    public class AuthenticationRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}
