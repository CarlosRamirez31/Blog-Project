using Blog.Core.Application.Features.Posts.Commands.CreatePostCommand;
using Blog.Core.Application.Features.Posts.Queries.GetPostById;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Presentation.WebApi.Controllers.v1
{
    [ApiVersion("1.0")]
    public class PostController : BaseApiController
    {
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
    }
}
