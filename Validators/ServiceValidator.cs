using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using Transfer.Contact;
using Validators.Contact;

namespace Validators;

public static class ServiceValidator
{
    public static IServiceCollection AddValidators(this IServiceCollection services)
    {
        services.AddSingleton<IValidator<CreateContact>, CreateContactValidator>();

        return services;
    }
}
