using Blog.Core.Application.Interfaces.Repositories;
using MediatR;

namespace Blog.Core.Application.Features.Posts.Commands.DeletePostCommand
{
    public class DeletePostCommand : IRequest<bool>
    {
        public int PostId { get; set; }
    }

    public class DeletePostCommandHandler : IRequestHandler<DeletePostCommand, bool>
    {
        private readonly IPostRepository _postRepository;

        public DeletePostCommandHandler(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        public async Task<bool> Handle(DeletePostCommand request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.GetByIdAsync(request.PostId);
            if (post is null)
                throw new KeyNotFoundException($"No existe un post de id {request.PostId}");

            await _postRepository.DeleteAsync(post);
            return true;
        }
    }
}
