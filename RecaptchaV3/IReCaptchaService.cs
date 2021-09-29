namespace RecaptchaV3;

public interface IReCaptchaService
{
    public Task<bool> Verify(string token);
}