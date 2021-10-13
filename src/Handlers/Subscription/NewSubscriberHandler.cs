using Errors;
using FluentValidation;
using MediatR;
using OneOf;
using Repositories.Contracts;
using Transfer.Subscription;

namespace Handlers.Subscription
{
    public class NewSubscriberHandler : IRequestHandler<CreateSubscriber.Request, OneOf<CreateSubscriber.Response, ValidationError, DatabaseError>>
    {
        private readonly ISubscriptionRepository _subscriptionRepository;
        private readonly IValidator<CreateSubscriber.Request> _validator;

        public NewSubscriberHandler(
            ISubscriptionRepository subscriptionRepository,
            IValidator<CreateSubscriber.Request> validator
        )
        {
            _subscriptionRepository = subscriptionRepository;
            _validator = validator;
        }

        public async Task<OneOf<CreateSubscriber.Response, ValidationError, DatabaseError>> Handle(CreateSubscriber.Request request, CancellationToken cancellationToken)
        {
            var result = _validator.Validate(request);

            if (!result.IsValid)
            {
                return new ValidationError(result.Errors);
            }

            var subscription = await _subscriptionRepository.CreateAsync(request, cancellationToken);

            return subscription.Match<OneOf<CreateSubscriber.Response, ValidationError, DatabaseError>>(
                contact => new CreateSubscriber.Response
                {
                    Id = contact.Id,
                    Name = contact.Name,
                    Email = contact.Email,
                    CreatedAt = contact.CreatedAt,
                },
                error => new DatabaseError(error.Message)
            );
        }
    }
}
