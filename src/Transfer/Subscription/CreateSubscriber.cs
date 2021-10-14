using NodaTime;
using OneOf;
using Errors;
using MediatR;

namespace Transfer.Subscription
{
    public static class CreateSubscriber
    {
        public record Request : IRequest<OneOf<Response, ValidationError, DatabaseError>>
        {
            public string? Name { get; set; }
            public string? Email { get; set; }
        }

        public record Response
        {
            public int Id { get; set; }
            public string Name { get; set; } = null!;
            public string Email { get; set; } = null!;
            public ZonedDateTime CreatedAt { get; set; }
        }
    }
}