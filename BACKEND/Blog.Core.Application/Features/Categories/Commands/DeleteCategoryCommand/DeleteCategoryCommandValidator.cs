using FluentValidation;

namespace Blog.Core.Application.Features.Categories.Commands.DeleteCategoryCommand
{
    public class DeleteCategoryCommandValidator : AbstractValidator<DeleteCategoryCommand>
    {
        public DeleteCategoryCommandValidator()
        {
            RuleFor(x => x.CategoryId)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio");
        }
    }
}
