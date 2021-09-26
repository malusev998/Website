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
        public async Task<IActionResult> MessageMe([FromBody] CreateContact createContact)
        {
            var response = await _sender.Send(createContact);

            return Created("/api/contact-me", response);
        }
    }
}
