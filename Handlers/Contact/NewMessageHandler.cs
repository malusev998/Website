using FluentValidation;
using MediatR;
using Repositories.Contracts;
using Transfer.Contact;

namespace Handlers.Contact
{
    public class NewMessageHandler : IRequestHandler<CreateContact, CreateContactResponse>
    {
        private readonly IContactRepository _contactRepository;
        private readonly IValidator<CreateContact> _validator;

        public NewMessageHandler(IContactRepository contactRepository, IValidator<CreateContact> validator)
        {
            _contactRepository = contactRepository;
            _validator = validator;
        }

        public async Task<CreateContactResponse> Handle(CreateContact request, CancellationToken cancellationToken)
        {
            _validator.ValidateAndThrow(request);

            var contact = await _contactRepository.CreateAsync(request, cancellationToken);

            return new CreateContactResponse
            {
                Id = contact.Id,
                Name = contact.Name,
                Surname = contact.Surname,
                Email = contact.Email,
                Subject = contact.Subject,
                Message = contact.Message,
                CreatedAt = contact.CreatedAt,
            };
        }
    }
}
