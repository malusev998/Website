using FluentValidation.Results;

namespace Errors
{
    public class ValidationError
    {
        public IEnumerable<ValidationFailure> Errors { get; set; }

        public ValidationError(IEnumerable<ValidationFailure> errors)
        {
            Errors = errors;
        }

        public IDictionary<string, string> FirstOfAll()
        {
            var dict = new Dictionary<string, string>();

            foreach (var fail in Errors)
            {
                if (!dict.ContainsKey(fail.PropertyName))
                {
                    dict.Add(fail.PropertyName, fail.ErrorMessage);
                }
            }

            return dict;
        }

        public IDictionary<string, List<string>> AllErrors()
        {
            var dict = new Dictionary<string, List<string>>();

            foreach (var fail in Errors)
            {
                var messages = dict.ContainsKey(fail.PropertyName) switch
                {
                    true => dict[fail.PropertyName],
                    false => new List<string>()
                };

                messages.Add(fail.ErrorMessage);
                dict.Add(fail.PropertyName, messages);
            }

            return dict;
        }
    }

}
