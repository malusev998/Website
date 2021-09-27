using FluentValidation;
using Transfer.Contact;

namespace Validators.Contact;

public class CreateContactValidator : AbstractValidator<CreateContact.Request>
{
    public CreateContactValidator()
    {
        RuleFor(c => c.Name)
            .NotEmpty()
            .WithMessage("Name cannot be empty")
            .MaximumLength(50)
            .WithMessage("Name cannot be longer than 50 characters")
            .MinimumLength(2)
            .WithMessage("Minimum length for Name is 2 characters");


        RuleFor(c => c.Surname)
            .NotEmpty()
            .WithMessage("Surname cannot be empty")
            .MaximumLength(50)
            .WithMessage("Surname cannot be longer than 50 characters")
            .MinimumLength(2)
            .WithMessage("Minimum length for Surname is 2 characters");


        RuleFor(c => c.Email)
            .NotEmpty()
            .WithMessage("Email cannot be empty")
            .MaximumLength(255)
            .WithMessage("Email cannot be longer than 255 characters")
            .MinimumLength(15)
            .WithMessage("Minimum length for Name is 15 characters")
            .EmailAddress()
            .WithMessage("Email is not valid");

        RuleFor(c => c.Subject)
            .NotEmpty()
            .WithMessage("Subject cannot be empty")
            .MaximumLength(200)
            .WithMessage("Subject cannot be longer than 200 characters")
            .MinimumLength(10)
            .WithMessage("Minimum length for Subject is 10 characters");

        RuleFor(c => c.Message)
            .NotEmpty()
            .WithMessage("Message cannot be empty")
            .MaximumLength(1000)
            .WithMessage("Message cannot be longer than 1000 characters")
            .MinimumLength(10)
            .WithMessage("Minimum length for Message is 10 characters");
    }
}
