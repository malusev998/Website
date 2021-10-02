namespace RecaptchaV3;

public class ReCaptchaV3Settings
{
    public string SecretKey { get; set; }

    public string Url { get; set; }

    public string UserAgent { get; set; }

    public string HeaderName { get; set; }
    
    public float Threshold { get; set; }
}