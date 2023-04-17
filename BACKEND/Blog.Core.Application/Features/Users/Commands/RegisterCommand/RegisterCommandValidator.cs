using FluentValidation;

namespace Blog.Core.Application.Features.Users.Commands.RegisterCommand
{
    public class RegisterCommandValidator : AbstractValidator<RegisterCommand>
    {
        public RegisterCommandValidator()
        {
            RuleFor(x => x.FirstName)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo")
                .MaximumLength(80).WithMessage("{PropertyName} no puede se mayor a {MaxLegth}");

            RuleFor(x => x.LastName)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo")
                .MaximumLength(120).WithMessage("{PropertyName} no puede se mayor a {MaxLegth}");

            RuleFor(x => x.Email)
                .EmailAddress().WithMessage("{PropertyValue} no es valido, por favor ingrese un correo valido")
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo");

            RuleFor(x => x.UserName)
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo")
                .MaximumLength(80).WithMessage("{PropertyName} no puede se mayor a {MaxLegth}");

            RuleFor(x => x.Password)
                .MinimumLength(6).WithMessage("{PropertyName} no puede se menor a {MinLength}")
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo");

            RuleFor(x => x.ConfirmPassword)
                .Equal(x => x.Password).WithMessage("{PropertyName} deben ser iguales")
                .MinimumLength(6).WithMessage("{PropertyName} no puede se menor a {MinLength}")
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio")
                .NotNull().WithMessage("{PropertyName} no puede ser nulo");
        }
    }
}
