using AutoMapper;
using Blog.Core.Application.Dtos.Category;
using Blog.Core.Application.Interfaces.Repository;
using MediatR;

namespace Blog.Core.Application.Features.Categories.Queries.GetCategoryByIdQuery
{
    public class GetCategoryByIdQuery : IRequest<CategoryResponseDto>
    {
        public int CategoryId { get; set; }
    }

    public class GetCategoryByIdQueryHandler : IRequestHandler<GetCategoryByIdQuery, CategoryResponseDto>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public GetCategoryByIdQueryHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<CategoryResponseDto> Handle(GetCategoryByIdQuery request, CancellationToken cancellationToken)
        {
            var category = await _categoryRepository.GetByIdAsync(request.CategoryId);
            if (category is null)
                throw new KeyNotFoundException($"No existe una categoria de id {request.CategoryId}");

            var dto = _mapper.Map<CategoryResponseDto>(category);
            return dto;
        }
    }
}
