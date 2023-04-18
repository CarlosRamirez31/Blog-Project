using FluentValidation;

namespace Blog.Core.Application.Features.Categories.Commands.CreateCategoryCommand
{
    public class CreateCategoryCommandValidator : AbstractValidator<CreateCategoryCommand>
    {
        public CreateCategoryCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .MaximumLength(120).WithMessage("{PropertyName} no puede ser mayor a {MaxLength}");
        }
    }
}
