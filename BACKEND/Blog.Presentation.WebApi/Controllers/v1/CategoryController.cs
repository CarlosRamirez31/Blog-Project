using Blog.Core.Application.Features.Categories.Commands.CreateCategoryCommand;
using Blog.Core.Application.Features.Categories.Commands.DeleteCategoryCommand;
using Blog.Core.Application.Features.Categories.Commands.UpdateCategoryCommand;
using Blog.Core.Application.Features.Categories.Queries.GetAllCategoryQuery;
using Blog.Core.Application.Features.Categories.Queries.GetCategoryByIdQuery;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

namespace Blog.Presentation.WebApi.Controllers.v1
{
    [ApiVersion("1.0")]
    public class CategoryController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllCategoryQuery()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            return Ok(await Mediator.Send(new GetCategoryByIdQuery() { CategoryId = id }));
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(CreateCategoryCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        [HttpPut("Update")]
        public async Task<ActionResult> Update(UpdateCategoryCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            return Ok(await Mediator.Send(new DeleteCategoryCommand() { CategoryId = id}));
        }
    }
}
