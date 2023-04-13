using Blog.Core.Application.Dtos.User;
using Blog.Core.Application.Interfaces.Services;
using MediatR;

namespace Blog.Core.Application.Features.Users.Commands.AuthenticationCommand
{
    public class AuthenticationCommand : IRequest<AuthenticationResponse>
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }

    public class AuthenticationCommandHandler : IRequestHandler<AuthenticationCommand, AuthenticationResponse>
    {
        private readonly IAccountService _accountService;

        public AuthenticationCommandHandler(IAccountService accountService)
        {
            _accountService = accountService;
        }

        public async Task<AuthenticationResponse> Handle(AuthenticationCommand request, CancellationToken cancellationToken)
        {
            return await _accountService.Authentication(new AuthenticationRequest
            {
                Email = request.Email,
                Password = request.Password
            });
        }
    }
}
