using System.Threading;
using System.Threading.Tasks;
using LanguageExt.Common;
using Models;
using Transfer.Contact;

namespace Repositories.Contracts;

public interface IContactRepository
{
    public Task<Result<Contact>> CreateAsync(CreateContact.Request createContact, CancellationToken cancellationToken = default);
}
 