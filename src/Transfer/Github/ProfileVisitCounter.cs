using MediatR;
using LanguageExt.Common;

namespace Transfer.Github
{
    public static class ProfileVisitCounter
    {
        public record Request(string Provider, string Identifier) : IRequest<Result<Unit>>
        {
            public string? Ip { get; set; }
            public string? UserAgent { get; set; }
            public string? Referer { get; set; }
        }
    }
}