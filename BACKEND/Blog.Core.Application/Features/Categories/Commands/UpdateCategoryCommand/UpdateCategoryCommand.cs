using AutoMapper;
using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Application.Wrappers;
using MediatR;

namespace Blog.Core.Application.Features.Categories.Commands.UpdateCategoryCommand
{
    public class UpdateCategoryCommand : IRequest<Response<int>>
    {
        public int CategoryId { get; set; }
        public string? Name { get; set; }
    }

    public class UpdateCategoryCommandHandler : IRequestHandler<UpdateCategoryCommand, Response<int>>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public UpdateCategoryCommandHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<Response<int>> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await _categoryRepository.GetByIdAsync(request.CategoryId);
            if (category is null)
                throw new KeyNotFoundException($"No existe una categoria de id{request.CategoryId}");

            _mapper.Map(request, category);
            await _categoryRepository.UpdateAsync(request.CategoryId, category);

            return new Response<int>(request.CategoryId);
        }
    }
}
