using Blog.Core.Application.Features.Comments.Commands.CreateCommentCommand;
using Blog.Core.Application.Features.Comments.Queries.GetCommentByIdQuery;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Presentation.WebApi.Controllers.v1
{
    [ApiVersion("1.0")]
    [Route("api/Post/{postId}/Comment")]
    public class CommentController : BaseApiController
    {
        [HttpGet("{commentId}", Name = "GetCommentById")]
        public async Task<ActionResult> GetById([FromRoute]int commentId)
        {
            return Ok(await Mediator.Send(new GetCommentByIdQuery() { CommentId = commentId}));
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(int postId, CreateCommentCommand command)
        {
            if (postId != command.PostId)
                return BadRequest("Los parametro de postId no coinciden");

            var comment = await Mediator.Send(command);
            return CreatedAtRoute("GetCommentById", new { postId = comment.PostId, commentId = comment.CommentId}, comment);
        }
    }
}
