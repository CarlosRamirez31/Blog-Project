using Blog.Core.Application.Interfaces.Repositories;
using MediatR;

namespace Blog.Core.Application.Features.Comments.Commands.DeleteCommentCommand
{
    public class DeleteCommentCommand : IRequest<bool>
    {
        public int PostId { get; set; }
        public int CommentId { get; set; }
    }

    public class DeleteCommentCommandHandler : IRequestHandler<DeleteCommentCommand, bool>
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IPostRepository _postRepository;

        public DeleteCommentCommandHandler(ICommentRepository commentRepository, IPostRepository postRepository)
        {
            _commentRepository = commentRepository;
            _postRepository = postRepository;
        }

        public async Task<bool> Handle(DeleteCommentCommand request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.GetByIdAsync(request.PostId);
            if (post is null)
                throw new KeyNotFoundException($"No se encuenta ningun post de id {request.PostId}");

            var comment = await _commentRepository.GetByIdAsync(request.CommentId);
            if (comment is null)
                throw new KeyNotFoundException($"No se encuenta ningun comentario de id {request.CommentId}");

            await _commentRepository.DeleteAsync(comment);
            return true;
        }
    }
}
