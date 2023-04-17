using FluentValidation;

namespace Blog.Core.Application.Features.Posts.Commands.UpdatePostCommand
{
    public class UpdatePostCommandValidator : AbstractValidator<UpdatePostCommand>
    {
        public UpdatePostCommandValidator()
        {
            RuleFor(x => x.PostId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo");

            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo")
                .MaximumLength(255).WithMessage("{PropertyName} no puede ser mayor a {MaxLegth}");

            RuleFor(x => x.Brief)
                .MaximumLength(255).WithMessage("{PropertyName} no puede ser mayor a {MaxLegth}");

            RuleFor(x => x.Context)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo");

            RuleFor(x => x.CategoryId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio");
        }
    }
}
