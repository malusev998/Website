using MediatR;

namespace Transfer.Email;

public static class Incoming
{
    public record Request : IRequest
    {
    }
}