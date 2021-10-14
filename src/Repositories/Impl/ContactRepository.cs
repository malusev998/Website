using Database;
using LanguageExt.Common;
using Microsoft.EntityFrameworkCore;
using Models;
using NodaTime;
using Repositories.Contracts;
using Transfer.Contact;

namespace Repositories.Impl
{
    public class ContactRepository : IContactRepository
    {
        private readonly DusanMalusevDbContext _dbContext;
        private readonly IClock _clock;

        public ContactRepository(DusanMalusevDbContext dbContext, IClock clock)
        {
            _dbContext = dbContext;
            _clock = clock;
        }

        public async Task<Result<Contact>> CreateAsync(
            CreateContact.Request createContact,
            CancellationToken cancellationToken = default
        )
        {
            var contact = new Contact
            {
                Name = createContact.Name!,
                Email = createContact.Email!,
                Subject = createContact.Subject!,
                Message = createContact.Message!,
                CreatedAt = _clock.GetCurrentInstant().InUtc(),
                UpdatedAt = _clock.GetCurrentInstant().InUtc(),
            };

            try
            {
                await _dbContext.Contacts.AddAsync(contact, cancellationToken);

                await _dbContext.SaveChangesAsync(cancellationToken);

                return new Result<Contact>(contact);
            }
            catch (OperationCanceledException e)
            {
                return new Result<Contact>(e);
            }
            catch (DbUpdateException e)
            {
                return new Result<Contact>(e);
            }
        }
    }
}