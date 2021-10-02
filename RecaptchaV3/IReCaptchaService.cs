using System.Threading;
using System.Threading.Tasks;

namespace RecaptchaV3;

public interface IReCaptchaService
{
    public Task<bool> VerifyAsync(string token, string? ip = null, float? score = null, CancellationToken cancellationToken = default);
}