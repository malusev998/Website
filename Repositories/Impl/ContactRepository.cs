using Database;
using Models;
using NodaTime;
using Repositories.Contracts;
using Transfer.Contact;

namespace Repositories.Impl;

public class ContactRepository : IContactRepository
{
    private readonly DusanMalusevDbContext _dbContext;
    private readonly IClock _clock;

    public ContactRepository(DusanMalusevDbContext dbContext, IClock clock)
    {
        _dbContext = dbContext;
        _clock = clock;
    }

    public async Task<Contact> CreateAsync(CreateContact createContact, CancellationToken cancellationToken = default)
    {
        var contact = new Contact
        {
            Name = createContact.Name,
            Surname = createContact.Surname,
            Email = createContact.Email,
            Subject = createContact.Subject,
            Message = createContact.Message,
            CreatedAt = _clock.GetCurrentInstant().InUtc()
        };


        await _dbContext.AddAsync(contact, cancellationToken);

        await _dbContext.SaveChangesAsync(cancellationToken);

        return contact;
    }
}
