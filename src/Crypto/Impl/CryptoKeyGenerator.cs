using System.Buffers;
using System.Buffers.Text;
using System.Security.Cryptography;
using System.Text;
using Crypto.Contracts;

namespace Crypto.Impl
{
    public class CryptoKeyGenerator : IKeyGenerator
    {
        public string GenerateKey(int length)
        {
            var keyBytes = RandomNumberGenerator.GetBytes(length);
            var output = new byte[Base64.GetMaxEncodedToUtf8Length(length)];

            var status = Base64.EncodeToUtf8(keyBytes.AsSpan(), output.AsSpan(), out _, out var written);

            if (status != OperationStatus.Done)
                throw new Exception("Error while encoding bytes to UTF8 Base64");

            var key = Encoding.UTF8.GetString(output[..written]);

            return key;
        }
    }
}
