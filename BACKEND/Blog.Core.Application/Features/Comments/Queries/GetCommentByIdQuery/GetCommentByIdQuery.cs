using AutoMapper;
using Blog.Core.Application.Dtos.Comment;
using Blog.Core.Application.Interfaces.Repositories;
using MediatR;

namespace Blog.Core.Application.Features.Comments.Queries.GetCommentByIdQuery
{
    public class GetCommentByIdQuery : IRequest<CommentResponseDto>
    {
        public int PostId { get; set; }
        public int CommentId { get; set; }
    }

    public class GetCommentByIdQueryHandler : IRequestHandler<GetCommentByIdQuery, CommentResponseDto>
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IPostRepository _postRepository;
        private readonly IMapper _mapper;

        public GetCommentByIdQueryHandler(ICommentRepository commentRepository, IPostRepository postRepository, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _postRepository = postRepository;
            _mapper = mapper;
        }

        public async Task<CommentResponseDto> Handle(GetCommentByIdQuery request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.GetByIdAsync(request.PostId);
            if(post is null)
                throw new KeyNotFoundException($"No existe un un post de id {request.PostId}");
                
            var comment = await _commentRepository.GetByIdAsync(request.CommentId);
            if (comment is null)
                throw new KeyNotFoundException($"No existe un comentario de id {request.CommentId}");

            var dto = _mapper.Map<CommentResponseDto>(comment);
            return dto;
        }
    }
}
