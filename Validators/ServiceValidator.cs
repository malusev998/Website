using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;
using Transfer.Contact;
using Transfer.Subscription;
using Validators.Contact;
using Validators.Subscription;

namespace Validators
{
    public static class ServiceValidator
    {
        public static IServiceCollection AddValidators(this IServiceCollection services)
        {
            services.AddFluentValidation(fv =>
            {
                fv.DisableDataAnnotationsValidation = true;
                fv.AutomaticValidationEnabled = false;
                fv.LocalizationEnabled = true;
            });

            return services
                .AddSingleton<IValidator<CreateContact.Request>, CreateContactValidator>()
                .AddSingleton<IValidator<CreateSubscriber.Request>, CreateSubscriberValidator>();
        }
    }
}
