using Blog.Core.Application.Features.Categories.Commands.CreateCategoryCommand;
using Blog.Core.Application.Features.Categories.Commands.DeleteCategoryCommand;
using Blog.Core.Application.Features.Categories.Commands.UpdateCategoryCommand;
using Blog.Core.Application.Features.Categories.Queries.GetAllCategoryQuery;
using Blog.Core.Application.Features.Categories.Queries.GetCategoryByIdQuery;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;

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

        [HttpGet("{id}", Name = "GetCategoryById")]
        public async Task<ActionResult> GetById(int id)
        {
            return Ok(await Mediator.Send(new GetCategoryByIdQuery() { CategoryId = id }));
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(CreateCategoryCommand command)
        {
            var category = await Mediator.Send(command);
            return CreatedAtRoute("GetCategoryById", new { id = category.CategoryId }, category);
        }

        [HttpPut("Update/{categoryId}")]
        public async Task<ActionResult> Update(int categoryId, UpdateCategoryCommand command)
        {
            if (categoryId != command.CategoryId)
                return BadRequest("Los parametros de categoryId no coinciden");

            var category = await Mediator.Send(command); 
            return Ok(category);
        }

        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var category = await Mediator.Send(new DeleteCategoryCommand() { CategoryId = id });
            return Ok(category);
        }
    }
}
