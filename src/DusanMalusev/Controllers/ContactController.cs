using MediatR;
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
        private readonly ILogger<ContactController> _logger;

        public ContactController(ISender sender, ILogger<ContactController> logger)
        {
            _sender = sender;
            _logger = logger;
        }

        [HttpPost]
        [Route("new")]
        [ReCaptchaV3]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> MessageMe(
            [FromBody] CreateContact.Request createContact,
            CancellationToken cancellationToken
        )
        {
            var response = await _sender.Send(createContact, cancellationToken);

            return response.Match<IActionResult>(
                contact => Created("/api/contact/new", contact),
                validation => UnprocessableEntity(validation.FirstOfAll()),
                databaseError =>
                {
                    _logger.LogError("An error has occurred: {DatabaseError}", databaseError.Message);
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }
            );
        }
    }
}