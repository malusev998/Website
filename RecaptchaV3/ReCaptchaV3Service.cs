using Microsoft.Extensions.Options;

namespace RecaptchaV3;

public class ReCaptchaV3Service : IReCaptchaService
{
    private readonly HttpClient _client;
    private readonly ReCaptchaV3Settings _settings;
    
    public ReCaptchaV3Service(HttpClient client, IOptions<ReCaptchaV3Settings> options)
    {
        _client = client;
        _settings = options.Value;
    }
    
    public Task<bool> Verify(string token)
    {
        throw new NotImplementedException();
    }
}