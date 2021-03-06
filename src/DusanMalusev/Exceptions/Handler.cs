using Errors;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace DusanMalusev.Exceptions
{
    public class Handler : IActionFilter
        , IOrderedFilter
    {
        public int Order => int.MaxValue - 10;

        private readonly ILogger _logger;

        public Handler(ILogger<Handler> logger)
        {
            _logger = logger;
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            var exception = context.Exception;

            switch (exception)
            {
                case null:
                    return;
                case ValidationException validationException:
                    context.Result = HandleValidationException(validationException);
                    context.ExceptionHandled = true;
                    return;
            }

            _logger.LogError(
                "An exception has been thrown: Message={Exception} Method={Method}",
                exception.Message,
                exception.TargetSite?.Name
            );

            context.Result = new ObjectResult(new { Message = "An error has occurred! Please Try again later" })
            {
                StatusCode = StatusCodes.Status500InternalServerError,
            };

            context.ExceptionHandled = true;
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
        }

        private static ObjectResult HandleValidationException(ValidationException exception)
            => new UnprocessableEntityObjectResult(
                new ValidationError(exception.Errors).FirstOfAll()
            );
    }
}