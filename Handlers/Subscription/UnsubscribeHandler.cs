using Errors;
using MediatR;
using OneOf;
using Repositories.Contracts;
using Transfer.Subscription;

namespace Handlers.Subscription
{
    public class UnsubscribeHandler : IRequestHandler<DeleteSubscriber.Request, OneOf<Unit, ValidationError, DatabaseError>>
    {
        private readonly ISubscriptionRepository _subscriptionRepository;

        public UnsubscribeHandler(ISubscriptionRepository subscriptionRepository)
        {
            _subscriptionRepository = subscriptionRepository;
        }
        
        public Task<OneOf<Unit, ValidationError, DatabaseError>> Handle(DeleteSubscriber.Request request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}