using MediatR;
using Microsoft.AspNetCore.Mvc;
using RecaptchaV3;
using Transfer.Subscription;

namespace DusanMalusev.Controllers
{
    [ApiController]
    [Route("api/subscription")]
    public class SubscriptionController : ControllerBase
    {
        private readonly ISender _sender;

        public SubscriptionController(ISender sender)
        {
            _sender = sender;
        }

        [HttpPost]
        [Route("new")]
        [ReCaptchaV3]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Subscribe([FromBody] CreateSubscriber.Request createSubscriber)
        {
            var response = await _sender.Send(createSubscriber);

            return response.Match<IActionResult>(
                contact => Created("/api/subscription/new", contact),
                validation => UnprocessableEntity(validation.FirstOfAll()),
                databaseError => StatusCode(StatusCodes.Status500InternalServerError)
            );
        }
    }
}
