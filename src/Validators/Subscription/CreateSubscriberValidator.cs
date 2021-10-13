using FluentValidation;
using Transfer.Subscription;

namespace Validators.Subscription
{
    public class CreateSubscriberValidator : AbstractValidator<CreateSubscriber.Request>
    {
        public CreateSubscriberValidator()
        {
            RuleFor(c => c.Name)
                .NotEmpty()
                .WithMessage("Name cannot be empty")
                .MaximumLength(50)
                .WithMessage("Name cannot be longer than 50 characters")
                .MinimumLength(2)
                .WithMessage("Minimum length for Name is 2 characters");

            RuleFor(c => c.Email)
                .NotEmpty()
                .WithMessage("Email cannot be empty")
                .MaximumLength(255)
                .WithMessage("Email cannot be longer than 255 characters")
                .MinimumLength(5)
                .WithMessage("Minimum length for Name is 15 characters")
                .EmailAddress()
                .WithMessage("Email is not valid");
        }
    }
}
