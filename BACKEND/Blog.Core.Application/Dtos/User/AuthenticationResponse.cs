namespace Blog.Core.Application.Dtos.User
{
    public class AuthenticationResponse
    {
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public string? IsVerified { get; set; }
        public string? JWToken { get; set; }
    }
}
