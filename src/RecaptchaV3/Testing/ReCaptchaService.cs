namespace RecaptchaV3.Testing;

public class ReCaptchaService : IReCaptchaService
{
    public Task<bool> VerifyAsync(string token, string? ip = null, float? score = null, CancellationToken cancellationToken = default)
    {
        return Task.FromResult(true);
    }
}