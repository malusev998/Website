using MediatR;

namespace Transfer.Contact;

public record CreateContact : IRequest<CreateContactResponse>
{
    public string Name { get; set; }

    public string Surname { get; set; }

    public string Email { get; set; }

    public string Subject { get; set; }

    public string Message { get; set; }
}