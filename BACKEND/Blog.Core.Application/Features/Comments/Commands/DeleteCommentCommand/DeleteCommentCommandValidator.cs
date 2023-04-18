using FluentValidation;

namespace Blog.Core.Application.Features.Comments.Commands.DeleteCommentCommand
{
    public class DeleteCommentCommandValidator : AbstractValidator<DeleteCommentCommand>
    {
        public DeleteCommentCommandValidator()
        {
            RuleFor(x => x.PostId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio");

            RuleFor(x => x.CommentId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio");
        }
    }
}
