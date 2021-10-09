using Errors;
using MediatR;
using OneOf;

namespace Transfer.Subscription
{
    public static class DeleteSubscriber
    {
        public record Request
            (string Url, int Id, string Token) : IRequest<OneOf<Unit, ValidationError, DatabaseError>>;
    }
}