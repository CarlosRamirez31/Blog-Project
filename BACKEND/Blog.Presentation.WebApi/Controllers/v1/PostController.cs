using Blog.Core.Application.Features.Posts.Commands.CreatePostCommand;
using Blog.Core.Application.Features.Posts.Commands.DeletePostCommand;
using Blog.Core.Application.Features.Posts.Commands.UpdatePostCommand;
using Blog.Core.Application.Features.Posts.Queries.GetAllPostQuery;
using Blog.Core.Application.Features.Posts.Queries.GetFilterPostQuery;
using Blog.Core.Application.Features.Posts.Queries.GetPostByIdQuery;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Presentation.WebApi.Controllers.v1
{
    [ApiVersion("1.0")]
    public class PostController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult> GetByFilter([FromQuery] GetFilterPostQuery query)
        {
            return Ok(await Mediator.Send(query));
        }

        [HttpGet("All")]
        public async Task<ActionResult> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllPostQuery()));
        }

        [HttpGet("{id}", Name = "GetPostById")]
        public async Task<ActionResult> GetById(int id)
        {
            return Ok(await Mediator.Send(new GetPostByIdQuery() { PostId = id }));
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(CreatePostCommand command)
        {
            var post = await Mediator.Send(command);
            return CreatedAtRoute("GetPostById", new { id = post.PostId }, post);
        }

        [HttpPut("Update/{categoryId}")]
        public async Task<ActionResult> Update(int categoryId, UpdatePostCommand command)
        {
            if (categoryId != command.CategoryId)
                return BadRequest("Los parametros de categoryId no coinciden");

            var post = await Mediator.Send(command);
            return Ok(post);
        }

        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var post = await Mediator.Send(new DeletePostCommand() { PostId = id });
            return Ok(post);
        }
    }
}
