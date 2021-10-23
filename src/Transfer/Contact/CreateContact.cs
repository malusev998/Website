using System.Text.Json.Serialization;
using Errors;
using MediatR;
using NodaTime;
using OneOf;

namespace Transfer.Contact
{
    public static class CreateContact
    {
        public record Request : IRequest<OneOf<Response, ValidationError, DatabaseError>>
        {
            public string? Name { get; set; }
            public string? Email { get; set; }
            public string? Subject { get; set; }
            public string? Message { get; set; }
        }

        public record Response
        {
            [JsonPropertyName("id")]
            public long Id { get; set; }
            
            [JsonPropertyName("name")]
            public string Name { get; set; } = null!;
            
            [JsonPropertyName("email")]
            public string Email { get; set; } = null!;
            
            [JsonPropertyName("subject")]
            public string Subject { get; set; } = null!;
            
            [JsonPropertyName("message")]
            public string Message { get; set; } = null!;
            
            [JsonPropertyName("createdAt")]
            public ZonedDateTime CreatedAt { get; set; }
        }
    }
}