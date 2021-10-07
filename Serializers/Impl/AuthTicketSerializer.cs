using Microsoft.AspNetCore.Authentication;
using Serializers.Contracts;

namespace Serializers.Impl
{
    public class AuthTicketSerializer : ITicketSerializer<AuthenticationTicket>, ITicketDeserializer<AuthenticationTicket>
    {
        public byte[] Serialize(AuthenticationTicket model)
        {
            return TicketSerializer.Default.Serialize(model);
        }

        public Task SerializeAsync(Stream stream, AuthenticationTicket model, CancellationToken cancelationToken = default)
        {
            throw new System.NotImplementedException();
        }

        public AuthenticationTicket Deserialize(byte[] data)
        {
            return TicketSerializer.Default.Deserialize(data);
        }

        public ValueTask<AuthenticationTicket> DeserializeAsync(Stream data, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }
    }
}