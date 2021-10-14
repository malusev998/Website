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

        public async Task<Result<Subscription>> CreateAsync(CreateSubscriber.Request createSubscriber,
            CancellationToken cancellationToken = default)
        {
            var now = _clock.GetCurrentInstant().InUtc();

            var subscription = new Subscription
            {
                Name = createSubscriber.Name!,
                Email = createSubscriber.Email!,
                CreatedAt = now,
                UpdatedAt = now,
            };

            try
            {
                await _dbContext.Subscriptions.AddAsync(subscription, cancellationToken);
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

        public async Task<Result<int>> DeleteAsync(int id, CancellationToken token = default)
        {
            try
            {
                var sub = new Subscription { Id = id };

                _dbContext.Subscriptions.Remove(sub);

                var rowCount = await _dbContext.SaveChangesAsync(token);

                return new Result<int>(rowCount);
            }
            catch (OperationCanceledException e)
            {
                return new Result<int>(e);
            }
            catch (DbUpdateException e)
            {
                return new Result<int>(e);
            }
        }
    }
}