using LanguageExt.Common;
using Models;
using Transfer.Contact;

namespace Repositories.Contracts
{
    public interface IContactRepository
    {
        Task<Result<Contact>> CreateAsync(CreateContact.Request createContact, CancellationToken cancellationToken = default);
    }
}
