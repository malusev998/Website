using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Crypto.Contracts;
using Crypto.Impl;
using Microsoft.Extensions.DependencyInjection;

namespace Crypto
{
    public static class ServiceProvider
    {
        public static IServiceCollection AddCrypto(this IServiceCollection services)
        {
            return services.AddSingleton<IKeyGenerator, CryptoKeyGenerator>();
        }
    }
}
