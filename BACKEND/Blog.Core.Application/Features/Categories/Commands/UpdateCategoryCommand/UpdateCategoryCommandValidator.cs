using FluentValidation;

namespace Blog.Core.Application.Features.Categories.Commands.UpdateCategoryCommand
{
    public class UpdateCategoryCommandValidator : AbstractValidator<UpdateCategoryCommand>
    {
        public UpdateCategoryCommandValidator()
        {
            RuleFor(x => x.CategoryId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo");

            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo")
                .MaximumLength(120).WithMessage("{PropertyName} no puede ser mayor a {MaxLength}");
        }
    }
}
