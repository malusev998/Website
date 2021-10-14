using Errors;
using FluentValidation;
using MediatR;
using OneOf;
using Repositories.Contracts;
using Transfer.Contact;

namespace Handlers.Contact
{
    public class NewMessageHandler : IRequestHandler<CreateContact.Request, OneOf<CreateContact.Response, ValidationError, DatabaseError>>
    {
        private readonly IContactRepository _contactRepository;
        private readonly IValidator<CreateContact.Request> _validator;

        public NewMessageHandler(IContactRepository contactRepository, IValidator<CreateContact.Request> validator)
        {
            _contactRepository = contactRepository;
            _validator = validator;
        }

        public async Task<OneOf<CreateContact.Response, ValidationError, DatabaseError>> Handle(CreateContact.Request request, CancellationToken cancellationToken)
        {
            var result = await _validator.ValidateAsync(request, cancellationToken);

            if (!result.IsValid)
            {
                return new ValidationError(result.Errors);
            }

            var contact = await _contactRepository.CreateAsync(request, cancellationToken);

            return contact.Match<OneOf<CreateContact.Response, ValidationError, DatabaseError>>(c => new CreateContact.Response
            {
                Id = c.Id,
                Name = c.Name,
                Email = c.Email,
                Subject = c.Subject,
                Message = c.Message,
                CreatedAt = c.CreatedAt,
            }, error => new DatabaseError(error.Message));
        }
    }
}
