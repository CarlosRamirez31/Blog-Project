using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Application.Wrappers;
using MediatR;

namespace Blog.Core.Application.Features.Categories.Commands.DeleteCategoryCommand
{
    public class DeleteCategoryCommand : IRequest<Response<int>>
    {
        public int CategoryId { get; set; }
    }

    public class DeleteCategoryDeleteHandler : IRequestHandler<DeleteCategoryCommand, Response<int>>
    {
        private readonly ICategoryRepository _categoryRepository;

        public DeleteCategoryDeleteHandler(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<Response<int>> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await _categoryRepository.GetByIdAsync(request.CategoryId);
            if (category is null)
                throw new KeyNotFoundException($"No se encuenta una categoria de id {request.CategoryId}");               

            await _categoryRepository.DeleteAsync(category);

            return new Response<int>(request.CategoryId);
        }
    }
}
