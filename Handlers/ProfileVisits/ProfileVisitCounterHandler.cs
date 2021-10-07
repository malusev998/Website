using System.Security.Cryptography;
using System.Text;
using Errors;
using LanguageExt.Common;
using MediatR;
using Microsoft.Extensions.Options;
using StackExchange.Redis;
using Transfer.Github;

namespace Handlers.ProfileVisits
{
    public class ProfileVisitCounterSettings
    {
        public int WriteToDatabaseFrequency { get; set; }
        public int RedisDatabase { get; set; }
    }

    public class ProfileVisitCounterHandler : IRequestHandler<ProfileVisitCounter.Request, Result<Unit>>, IDisposable
    {
        private const string Key = "counter";

        private readonly IDatabaseAsync _database;
        private readonly ProfileVisitCounterSettings _settings;
        private readonly Random _random;
        private readonly SHA256 _sha256;

        public ProfileVisitCounterHandler(IConnectionMultiplexer redis, IOptions<ProfileVisitCounterSettings> options)
        {
            _settings = options.Value;
            _database = redis.GetDatabase(_settings.RedisDatabase);
            _random = new Random();
            _sha256 = SHA256.Create();
        }

        public async Task<Result<Unit>> Handle(ProfileVisitCounter.Request request, CancellationToken cancellationToken)
        {
            var hash = BitConverter.ToString(
                _sha256.ComputeHash(
                    Encoding.UTF8.GetBytes(request.UserAgent + request.Ip)
                )
            );

            var key = new RedisKey($"{Key}:{request.Provider}:{hash}");

            var success = await _database.HyperLogLogAddAsync(
                key,
                new RedisValue(request.Ip),
                CommandFlags.FireAndForget
            );

            if (!success)
            {
                return new Result<Unit>(new RedisError("Failed write to HyperLogLog"));
            }

            var count = await _database.HyperLogLogLengthAsync(key);

            var shouldWrite = _random.NextInt64(0, _settings.WriteToDatabaseFrequency);

            if (count % shouldWrite == 0)
            {
            }

            return new Result<Unit>(Unit.Value);
        }

        public void Dispose()
        {
            _sha256.Dispose();
        }
    }
}