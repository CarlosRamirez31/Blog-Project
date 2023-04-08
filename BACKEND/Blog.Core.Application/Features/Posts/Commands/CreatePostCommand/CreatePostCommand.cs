using AutoMapper;
using Blog.Core.Application.Dtos.Post;
using Blog.Core.Application.Interfaces.Repositories;
using Blog.Core.Application.Interfaces.Repository;
using Blog.Core.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Http;
using Ubiety.Dns.Core;

namespace Blog.Core.Application.Features.Posts.Commands.CreatePostCommand
{
    public class CreatePostCommand : IRequest<PostResponseDto>
    {
        public string? Title { get; set; }
        public string? Brief { get; set; }
        public string? Context { get; set; }
        public int CategoryId { get; set; }
    }

    public class CreatePostCommandHandler : IRequestHandler<CreatePostCommand, PostResponseDto>
    {
        private readonly IPostRepository _postRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public CreatePostCommandHandler(IPostRepository postRepository, ICategoryRepository categoryRepository, IMapper mapper)
        {
            _postRepository = postRepository;
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<PostResponseDto> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            var category = await _categoryRepository.GetByIdAsync(request.CategoryId);
            if (category is null)
                throw new KeyNotFoundException($"No existe una categoria de id {request.CategoryId}");

            var post = _mapper.Map<Post>(request);
            var data = await _postRepository.AddAsync(post);

            var dto = _mapper.Map<PostResponseDto>(data);
            return dto;
        }
    }
}
