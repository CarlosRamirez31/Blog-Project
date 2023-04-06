using FluentValidation.Results;

namespace Blog.Core.Application.Exceptions
{
    public class ValidationException : Exception
    {
        public List<string> Errors { get; }

        public ValidationException(): base("Ha ocurrido uno o mas errores de validaciones")
        {
            Errors = new List<string>();
        }

        public ValidationException(IEnumerable<ValidationFailure> failures): this()
        {
            foreach(var failure in failures) 
            {
                Errors.Add(failure.ErrorMessage);
            }
        }
    }
}
