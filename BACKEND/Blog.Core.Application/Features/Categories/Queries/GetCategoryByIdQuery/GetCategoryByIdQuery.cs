using AutoMapper;
using Blog.Core.Application.Dtos.Category;
using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Application.Wrappers;
using MediatR;

namespace Blog.Core.Application.Features.Categories.Queries.GetCategoryByIdQuery
{
    public class GetCategoryByIdQuery : IRequest<Response<CategoryResponseDto>>
    {
        public int CategoryId { get; set; }
    }

    public class GetCategoryByIdQueryHandler : IRequestHandler<GetCategoryByIdQuery, Response<CategoryResponseDto>>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public GetCategoryByIdQueryHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<Response<CategoryResponseDto>> Handle(GetCategoryByIdQuery request, CancellationToken cancellationToken)
        {
            var category = await _categoryRepository.GetByIdAsync(request.CategoryId);
            if (category is null)
                throw new KeyNotFoundException($"No existe una categoria de id {request.CategoryId}");

            var dto = _mapper.Map<CategoryResponseDto>(category);
            return new Response<CategoryResponseDto>(dto);
        }
    }
}
