using AutoMapper;
using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Application.Wrappers;
using Blog.Core.Domain.Entities;
using MediatR;

namespace Blog.Core.Application.Features.Categories.Commands.CreateCategoryCommand
{
    public class CreateCategoryCommand : IRequest<Response<int>>
    {
        public string? Name { get; set; }
    }

    public class CreateCategoryCommandHandler : IRequestHandler<CreateCategoryCommand, Response<int>>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public CreateCategoryCommandHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<Response<int>> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = _mapper.Map<Category>(request);
            var data = await _categoryRepository.AddAsync(category);

            return new Response<int>(data.CategoryId);
        }
    }
}
