using FluentValidation;

namespace Blog.Core.Application.Features.Posts.Commands.DeletePostCommand
{
    public class DeletePostCommandValidator : AbstractValidator<DeletePostCommand>
    {
        public DeletePostCommandValidator()
        {
            RuleFor(x => x.PostId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo");
        }
    }
}
