using Database;
using LanguageExt.Common;
using Microsoft.EntityFrameworkCore;
using Models;
using NodaTime;
using Repositories.Contracts;
using Transfer.Subscription;

namespace Repositories.Impl
{
    public class SubscriptionRepository : ISubscriptionRepository
    {
        private readonly DusanMalusevDbContext _dbContext;
        private readonly IClock _clock;

        public SubscriptionRepository(DusanMalusevDbContext dbContext, IClock clock)
        {
            _dbContext = dbContext;
            _clock = clock;
        }

        public async Task<Result<Subscription>> CreateAsync(CreateSubscriber.Request createSubscriber, CancellationToken cancellationToken = default)
        {
            var subscription = new Subscription
            {
                Name = createSubscriber.Name!,
                Email = createSubscriber.Email!,
                CreatedAt = _clock.GetCurrentInstant().InUtc()
            };

            try
            {
                await _dbContext.AddAsync(subscription, cancellationToken);
                await _dbContext.SaveChangesAsync(cancellationToken);

                return new Result<Subscription>(subscription);
            }
            catch (OperationCanceledException e)
            {
                return new Result<Subscription>(e);
            }
            catch (DbUpdateException e)
            {
                return new Result<Subscription>(e);
            }
        }
    }
}
