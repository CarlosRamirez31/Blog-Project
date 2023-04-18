using FluentValidation;

namespace Blog.Core.Application.Features.Users.Commands.AuthenticationCommand
{
    public class AuthenticationCommandValidator : AbstractValidator<AuthenticationCommand>
    {
        public AuthenticationCommandValidator()
        {
            RuleFor(x => x.Email)
                .EmailAddress().WithMessage("{PropertyValue} no es valido, por favor ingrese un correo valido")
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio");

            RuleFor(x => x.Password)
                .MinimumLength(6).WithMessage("{PropertyName} no puede se menor a {MinLength}")
                .NotEmpty().WithMessage("{PropertyName} no puede esta vacio");
        }
    }
}
