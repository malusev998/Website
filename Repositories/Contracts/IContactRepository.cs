using Models;
using Transfer.Contact;

namespace Repositories.Contracts;

public interface IContactRepository
{
    public Task<Contact> CreateAsync(CreateContact createContact, CancellationToken cancellationToken = default);
}
 