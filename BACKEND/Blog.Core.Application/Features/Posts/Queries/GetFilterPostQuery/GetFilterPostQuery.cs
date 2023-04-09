using AutoMapper;
using Blog.Core.Application.Dtos.Post;
using Blog.Core.Application.Interfaces.Repositories;
using Blog.Core.Application.Parameters;
using Blog.Core.Application.Wrappers;
using MediatR;

namespace Blog.Core.Application.Features.Posts.Queries.GetFilterPostQuery
{
    public class GetFilterPostQuery : FilterRequest, IRequest<PageResponse<PostResponseDto>>
    {
    }

    public class GetFilterPostQueryHandler : IRequestHandler<GetFilterPostQuery, PageResponse<PostResponseDto>>
    {
        private readonly IPostRepository _postRepository;
        private readonly IMapper _mapper;

        public GetFilterPostQueryHandler(IPostRepository postRepository, IMapper mapper)
        {
            _postRepository = postRepository;
            _mapper = mapper;
        }

        public async Task<PageResponse<PostResponseDto>> Handle(GetFilterPostQuery request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.ListByFiltersAsync(request);
            var dto = _mapper.Map<PageResponse<PostResponseDto>>(post);

            return dto;
        }
    }
}
