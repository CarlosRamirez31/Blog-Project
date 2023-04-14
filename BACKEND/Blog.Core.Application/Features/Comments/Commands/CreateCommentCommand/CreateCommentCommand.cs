using AutoMapper;
using Blog.Core.Application.Dtos.Comment;
using Blog.Core.Application.Interfaces.Repositories;
using Blog.Core.Domain.Entities;
using MediatR;

namespace Blog.Core.Application.Features.Comments.Commands.CreateCommentCommand
{
    public class CreateCommentCommand : IRequest<CommentResponseDto>
    {
        public int PostId { get; set; }
        public string? Content { get; set; }
    }

    public class CreateCommentCommandHandler : IRequestHandler<CreateCommentCommand, CommentResponseDto>
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IPostRepository _postRepository;
        private readonly IMapper _mapper;

        public CreateCommentCommandHandler(ICommentRepository commentRepository, IPostRepository postRepository, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _postRepository = postRepository;
            _mapper = mapper;
        }

        public async Task<CommentResponseDto> Handle(CreateCommentCommand request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.GetByIdAsync(request.PostId);
            if (post is null)
                throw new KeyNotFoundException($"No existe un post de id {request.PostId}");

            var comment = _mapper.Map<Comment>(request);
            var data = await _commentRepository.AddAsync(comment);

            var dto = _mapper.Map<CommentResponseDto>(data);
            return dto;
        }
    }
}
