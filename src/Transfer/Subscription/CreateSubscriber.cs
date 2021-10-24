using NodaTime;
using OneOf;
using Errors;
using MediatR;

namespace Transfer.Subscription
{
    public static class CreateSubscriber
    {
        public record Request : IRequest<OneOf<Response, RecordAlreadyExits, ValidationError, DatabaseError>>
        {
            public string? Name { get; set; }
            public string? Email { get; set; }
        }
        
        public record Response
        {
            public long Id { get; init; }
            public string Name { get; init; } = null!;
            public string Email { get; init; } = null!;
            public ZonedDateTime CreatedAt { get; init; }
        }
    }
}