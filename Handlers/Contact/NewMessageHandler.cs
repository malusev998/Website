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
            var result = _validator.Validate(request);

            if (!result.IsValid)
            {
                return new ValidationError();
            }

            var contact = await _contactRepository.CreateAsync(request, cancellationToken);


            return contact.Match<OneOf<CreateContact.Response, ValidationError, DatabaseError>>(contact => new CreateContact.Response
            {
                Id = contact.Id,
                Name = contact.Name,
                Surname = contact.Surname,
                Email = contact.Email,
                Subject = contact.Subject,
                Message = contact.Message,
                CreatedAt = contact.CreatedAt,
            }, error => new DatabaseError(error.Message));

        }
    }
}
