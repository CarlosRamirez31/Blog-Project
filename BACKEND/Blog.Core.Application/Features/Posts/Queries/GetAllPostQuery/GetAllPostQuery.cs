using AutoMapper;
using Blog.Core.Application.Dtos.Post;
using Blog.Core.Application.Interfaces.Repositories;
using MediatR;

namespace Blog.Core.Application.Features.Posts.Queries.GetAllPostQuery
{
    public class GetAllPostQuery : IRequest<List<PostResponseDto>>
    {

    }

    public class GetAllPostQueryHandler : IRequestHandler<GetAllPostQuery, List<PostResponseDto>>
    {
        private readonly IPostRepository _postRepository;
        private readonly IMapper _mapper;

        public GetAllPostQueryHandler(IPostRepository postRepository, IMapper mapper)
        {
            _postRepository = postRepository;
            _mapper = mapper;
        }

        public async Task<List<PostResponseDto>> Handle(GetAllPostQuery request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.GetAllAsync();
            if (post.Count() < 1)
                throw new KeyNotFoundException("No se encuentra ninguna post");

            var dto = _mapper.Map<List<PostResponseDto>>(post);
            return dto;
        }
    }
}
