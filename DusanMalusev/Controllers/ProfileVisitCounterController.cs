using MediatR;
using Microsoft.AspNetCore.Mvc;
using Transfer.Github;

namespace DusanMalusev.Controllers
{
    [ApiController]
    [Route("api/profile/visit")]
    public class ProfileVisitCounterController : ControllerBase
    {
        private static readonly string[] Providers = { "github" };

        private readonly ISender _sender;

        public ProfileVisitCounterController(ISender sender)
        {
            _sender = sender;
        }

        [HttpGet]
        [Route("providers")]
        public IActionResult GetProvider()
        {
            return Ok(Providers);
        }

        [HttpGet]
        [Route("new/{provider:required:alpha:minlength(4):maxlength(30)}")]
        public async Task<IActionResult> AddCount(
            string provider,
            [FromQuery(Name = "identifier")] string identifier
        )
        {
            var request = new ProfileVisitCounter.Request(provider, identifier)
            {
                UserAgent = HttpContext.Request.Headers.UserAgent.FirstOrDefault(string.Empty),
                Referer = HttpContext.Request.Headers.Referer.FirstOrDefault(string.Empty),
                Ip = HttpContext.Connection.RemoteIpAddress?.ToString()
            };

            var result = await _sender.Send(request);

            return result.Match(
                _ => Ok(),
                _ => StatusCode(StatusCodes.Status500InternalServerError)
            );
        }
    }
}