using Crypto.Contracts;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.Caching.Distributed;
using Serializers.Contracts;

namespace DusanMalusev.Sessions
{
    public class DistributedSessionStore : ITicketStore
    {
        private const string Prefix = "TicketStore:";

        private const int KeyLength = 16;

        private readonly IDistributedCache _cache;
        private readonly ITicketSerializer<AuthenticationTicket> _serializer;
        private readonly ITicketDeserializer<AuthenticationTicket> _deserializer;
        private readonly IKeyGenerator _keyGenerator;

        public DistributedSessionStore(
            IDistributedCache cache,
            IKeyGenerator generator,
            ITicketSerializer<AuthenticationTicket> serializer,
            ITicketDeserializer<AuthenticationTicket> deserializer
        )
        {
            _cache = cache;
            _keyGenerator = generator;
            _serializer = serializer;
            _deserializer = deserializer;
        }

        public Task RemoveAsync(string key) => RemoveAsync(key, default);

        public async Task RemoveAsync(string key, CancellationToken token) =>
            await _cache.RemoveAsync(Prefix + key, token);

        public Task RenewAsync(string key, AuthenticationTicket ticket) => RenewAsync(key, ticket, default);

        public async Task RenewAsync(string key, AuthenticationTicket ticket, CancellationToken token)
        {
            var properties = new DistributedCacheEntryOptions();

            if (ticket.Properties.ExpiresUtc.HasValue)
            {
                properties.SetAbsoluteExpiration(ticket.Properties.ExpiresUtc.Value);
            }

            var value = _serializer.Serialize(ticket);
            await _cache.SetAsync(Prefix + key, value, properties, token);
        }

        public Task<AuthenticationTicket?> RetrieveAsync(string key) => RetrieveAsync(key, default);

        public async Task<AuthenticationTicket?> RetrieveAsync(string key, CancellationToken cancellationToken)
        {
            var data = await _cache.GetAsync(Prefix + key, cancellationToken);

            if (data is null)
            {
                throw new Exception("Session data not found");
            }

            var ticket = _deserializer.Deserialize(data);

            if (ticket is null)
            {
                throw new Exception("Failed to deserialize data");
            }

            return ticket;
        }

        public Task<string> StoreAsync(AuthenticationTicket ticket) => StoreAsync(ticket, default);

        public async Task<string> StoreAsync(AuthenticationTicket ticket, CancellationToken token)
        {
            var key = _keyGenerator.GenerateKey(KeyLength);

            await RenewAsync(key, ticket, token);

            return key;
        }
    }
}
