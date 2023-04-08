using AutoMapper;
using Blog.Core.Application.Dtos.Category;
using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Application.Wrappers;
using MediatR;

namespace Blog.Core.Application.Features.Categories.Queries.GetAllCategoryQuery
{
    public class GetAllCategoryQuery : IRequest<List<CategoryResponseDto>>
    {

    }

    public class GetAllCategoryQueryHandler : IRequestHandler<GetAllCategoryQuery, List<CategoryResponseDto>>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public GetAllCategoryQueryHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<List<CategoryResponseDto>> Handle(GetAllCategoryQuery request, CancellationToken cancellationToken)
        {
            var category = await _categoryRepository.GetAllAsync();

            var dto = _mapper.Map<List<CategoryResponseDto>>(category);

            return dto;
        }
    }
}
