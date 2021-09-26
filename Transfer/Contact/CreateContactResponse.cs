using NodaTime;

namespace Transfer.Contact;

public class CreateContactResponse
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Surname { get; set; }

    public string Email { get; set; }

    public string Subject { get; set; }

    public string Message { get; set; }

    public ZonedDateTime CreatedAt { get; set; }
}
