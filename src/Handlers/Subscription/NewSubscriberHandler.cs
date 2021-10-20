using Errors;
using FluentValidation;
using MediatR;
using OneOf;
using Repositories.Contracts;
using Transfer.Subscription;

namespace Handlers.Subscription
{
    public class NewSubscriberHandler : IRequestHandler<CreateSubscriber.Request, OneOf<CreateSubscriber.Response, RecordAlreadyExits, ValidationError, DatabaseError>>
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

        public async Task<OneOf<CreateSubscriber.Response, RecordAlreadyExits, ValidationError, DatabaseError>> Handle(
            CreateSubscriber.Request request, CancellationToken cancellationToken)
        {
            var result = await _validator.ValidateAsync(request, cancellationToken);

            if (!result.IsValid)
            {
                return new ValidationError(result.Errors);
            }

            var subscription = await _subscriptionRepository.GetOneAsync(request.Email, cancellationToken);

            if (subscription.IsSuccess)
            {
                return new RecordAlreadyExits();
            }
            
            subscription = await _subscriptionRepository.CreateAsync(request, cancellationToken);

            return subscription
                .Match<OneOf<CreateSubscriber.Response, RecordAlreadyExits, ValidationError, DatabaseError>>(
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