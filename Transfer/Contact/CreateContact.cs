using Errors;
using MediatR;
using NodaTime;
using OneOf;

namespace Transfer.Contact;

public static class CreateContact
{
    public class Request : IRequest<OneOf<Response, ValidationError, DatabaseError>>
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Subject { get; set; }

        public string Message { get; set; }
    }


    public class Response
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        public string Subject { get; set; }

        public string Message { get; set; }

        public ZonedDateTime CreatedAt { get; set; }
    }
}

