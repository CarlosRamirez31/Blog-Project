using AutoMapper;
using Blog.Core.Application.Dtos.Comment;
using Blog.Core.Application.Interfaces.Repositories;
using MediatR;

namespace Blog.Core.Application.Features.Comments.Queries.GetAllCommentQuery
{
    public class GetAllCommentQuery : IRequest<List<CommentResponseDto>>
    {
        public int PostId { get; set; }
    }

    public class GetAllCommentQueryHandler : IRequestHandler<GetAllCommentQuery, List<CommentResponseDto>>
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IMapper _mapper;

        public GetAllCommentQueryHandler(ICommentRepository commentRepository, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _mapper = mapper;
        }

        public async Task<List<CommentResponseDto>> Handle(GetAllCommentQuery request, CancellationToken cancellationToken)
        {
            var comment = await _commentRepository.GetAllCommentAsync(request.PostId);
            if (comment.Count() == 0)
                throw new KeyNotFoundException("No se encuentra ningun comentario");
            
            var dto = _mapper.Map<List<CommentResponseDto>>(comment);
            return dto;
        }
    }
}
