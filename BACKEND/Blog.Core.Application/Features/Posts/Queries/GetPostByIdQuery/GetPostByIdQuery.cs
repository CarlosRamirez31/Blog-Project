using AutoMapper;
using Blog.Core.Application.Dtos.Post;
using Blog.Core.Application.Interfaces.Repositories;
using MediatR;

namespace Blog.Core.Application.Features.Posts.Queries.GetPostByIdQuery
{
    public class GetPostByIdQuery : IRequest<PostResponseDto>
    {
        public int PostId { get; set; }
    }

    public class GetPostByIdQueryHandler : IRequestHandler<GetPostByIdQuery, PostResponseDto>
    {
        private readonly IPostRepository _postRepository;
        private readonly IMapper _mapper;

        public GetPostByIdQueryHandler(IPostRepository postRepository, IMapper mapper)
        {
            _postRepository = postRepository;
            _mapper = mapper;
        }

        public async Task<PostResponseDto> Handle(GetPostByIdQuery request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.GetByIdAsync(request.PostId);
            if (post is null)
                throw new KeyNotFoundException($"No existe un post de id {request.PostId}");

            var dto = _mapper.Map<PostResponseDto>(post);
            return dto;
        }
    }
}
