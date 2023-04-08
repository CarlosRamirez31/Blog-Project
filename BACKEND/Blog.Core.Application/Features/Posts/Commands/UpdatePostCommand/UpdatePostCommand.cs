using AutoMapper;
using Blog.Core.Application.Interfaces.Repositories;
using Blog.Core.Application.Interfaces.Repository;
using MediatR;

namespace Blog.Core.Application.Features.Posts.Commands.UpdatePostCommand
{
    public class UpdatePostCommand : IRequest<bool>
    {
        public int PostId { get; set; }
        public string? Title { get; set; }
        public string? Brief { get; set; }
        public string? Context { get; set; }
        public int CategoryId { get; set; }
    }

    public class UpdatePostCommandHandler : IRequestHandler<UpdatePostCommand, bool>
    {
        private readonly IPostRepository _postRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public UpdatePostCommandHandler(IPostRepository postRepository, ICategoryRepository categoryRepository, IMapper mapper)
        {
            _postRepository = postRepository;
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<bool> Handle(UpdatePostCommand request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.GetByIdAsync(request.PostId);
            if (post is null)
                throw new KeyNotFoundException($"No existe un post de id {request.PostId}");

            var category = await _categoryRepository.GetByIdAsync(request.CategoryId);
            if(category is null)
                throw new KeyNotFoundException($"No existe una categoria de id {request.CategoryId}");

            _mapper.Map(request, post);
            await _postRepository.UpdateAsync(request.PostId, post);

            return true;
        }
    }
}
