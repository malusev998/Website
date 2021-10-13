using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RecaptchaV3;
using Transfer.Contact;

namespace DusanMalusev.Controllers
{
    [Route("api/contact")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ISender _sender;

        public ContactController(ISender sender)
        {
            _sender = sender;
        }

        [HttpPost]
        [Route("new")]
        [ReCaptchaV3]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> MessageMe([FromBody] CreateContact.Request createContact)
        {
            var response = await _sender.Send(createContact);

            return response.Match<IActionResult>(
                contact => Created("/api/contact/new", contact),
                validation => UnprocessableEntity(validation.FirstOfAll()),
                databaseError => StatusCode(StatusCodes.Status500InternalServerError)
            );
        }
    }
}
