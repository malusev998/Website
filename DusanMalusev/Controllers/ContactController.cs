using MediatR;
using Microsoft.AspNetCore.Mvc;
using Transfer.Contact;

namespace DusanMalusev.Controllers
{
    [Route("api/contact-me")]
    [ApiController]
    public class ContactController : Controller
    {
        private readonly ISender _sender;

        public ContactController(ISender sender)
        {
            _sender = sender;
        }

        [HttpPost]
        [Route("")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> MessageMe([FromBody] CreateContact.Request createContact)
        {
            var response = await _sender.Send(createContact);

            return response.Match<IActionResult>(
                contact => Created("/api/contact-me", response),
                validation => UnprocessableEntity(),
                databaseError => StatusCode(StatusCodes.Status500InternalServerError)
            );
        }
    }
}
