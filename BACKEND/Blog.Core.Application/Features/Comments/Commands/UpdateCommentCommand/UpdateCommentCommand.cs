using AutoMapper;
using Blog.Core.Application.Interfaces.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Core.Application.Features.Comments.Commands.UpdateCommentCommand
{
    public class UpdateCommentCommand : IRequest<bool>
    {
        public int PostId { get; set; }
        public int CommentId { get; set; }
        public string? Content { get; set; }
    }

    public class UpdateCommentCommandHandler : IRequestHandler<UpdateCommentCommand, bool>
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IPostRepository _postRepository;
        private readonly IMapper _mapper;

        public UpdateCommentCommandHandler(ICommentRepository commentRepository, IPostRepository postRepository, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _postRepository = postRepository;
            _mapper = mapper;
        }

        public async Task<bool> Handle(UpdateCommentCommand request, CancellationToken cancellationToken)
        {
            var post = await _postRepository.GetByIdAsync(request.PostId);
            if (post is null)
                throw new KeyNotFoundException($"No se encuentra un post de id {request.PostId}");

            var comment = await _commentRepository.GetByIdAsync(request.CommentId);
            if (comment is null)
                throw new KeyNotFoundException($"No se encuentra un comentario de id {request.PostId}");

            _mapper.Map(request, comment);
            await _commentRepository.UpdateAsync(request.CommentId, comment);

            return true;
        }
    }
}
