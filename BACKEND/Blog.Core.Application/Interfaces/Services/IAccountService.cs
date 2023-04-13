using Blog.Core.Application.Dtos.User;

namespace Blog.Core.Application.Interfaces.Services
{
    public interface IAccountService
    {
        Task<RegisterResponse> RegisterUser(RegisterRequest request);
        Task<AuthenticationResponse> Authentication(AuthenticationRequest request);
    }
}
