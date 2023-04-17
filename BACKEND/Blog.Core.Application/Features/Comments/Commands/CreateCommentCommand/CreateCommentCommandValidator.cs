using FluentValidation;

namespace Blog.Core.Application.Features.Comments.Commands.CreateCommentCommand
{
    public class CreateCommentCommandValidator : AbstractValidator<CreateCommentCommand>
    {
        public CreateCommentCommandValidator()
        {
            RuleFor(x => x.PostId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo");

            RuleFor(x => x.Content)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo")
                .MaximumLength(255).WithMessage("{PropertyName} no puede ser mayor a {Maxlength}");
        }
    }
}
