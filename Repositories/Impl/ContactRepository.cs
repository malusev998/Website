using Database;
using Models;
using Repositories.Contracts;
using Transfer.Contact;

namespace Repositories.Impl;

public class ContactRepository : IContactRepository
{
    private readonly DusanMalusevDbContext _dbContext;

    public ContactRepository(DusanMalusevDbContext dbContext)
    {
        _dbContext = dbContext;
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
        };

        await _dbContext.AddAsync(contact, cancellationToken);

        await _dbContext.SaveChangesAsync(cancellationToken);

        return contact;
    }
}
