using LanguageExt.Common;
using Models;
using Transfer.Subscription;

namespace Repositories.Contracts
{
    public interface ISubscriptionRepository
    {
        Task<Result<Subscription>> CreateAsync(CreateSubscriber.Request createContact, CancellationToken cancellationToken = default);
    }
}
