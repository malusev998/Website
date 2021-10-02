using FluentValidation.Results;

namespace Errors
{
    public class ValidationError
    {
        public List<ValidationFailure> Errors { get; set; }

        public ValidationError(List<ValidationFailure> errors)
        {
            Errors = errors;
        }
    }

}
