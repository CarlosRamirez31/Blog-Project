using FluentValidation;

namespace Blog.Core.Application.Features.Comments.Commands.UpdateCommentCommand
{
    public class UpdateCommentCommandValidator : AbstractValidator<UpdateCommentCommand>
    {
        public UpdateCommentCommandValidator()
        {
            RuleFor(x => x.PostId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio");

            RuleFor(x => x.CommentId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio");

            RuleFor(x => x.Content)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .MaximumLength(255).WithMessage("{PropertyName} no puede ser mayor a {Maxlength}");
        }
    }
}
