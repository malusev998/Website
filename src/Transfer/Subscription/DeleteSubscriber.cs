using Errors;
using MediatR;
using OneOf;

namespace Transfer.Subscription
{
    public static class DeleteSubscriber
    {
        public record Request
            (string Url, long Id, string Token) : IRequest<OneOf<Unit, ValidationError, DatabaseError>>;
    }
}