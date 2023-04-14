using Blog.Core.Application.Dtos.User;
using Blog.Core.Application.Features.Users.Commands.AuthenticationCommand;
using Blog.Core.Application.Features.Users.Commands.RegisterCommand;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Presentation.WebApi.Controllers
{
    [Route("api/Account")]
    [ApiController]
    public class AccountController : BaseApiController
    {
        [HttpPost("Authentication")]
        public async Task<ActionResult> Authentication(AuthenticationCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(RegisterCommand command)
        {
            return Ok(await Mediator.Send(command));
        }
    }
}
