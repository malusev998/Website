
namespace RecaptchaV3
{
    public interface IReCaptchaService
    {
        Task<bool> VerifyAsync(string token, string? ip = null, float? score = null, CancellationToken cancellationToken = default);
    }
}
