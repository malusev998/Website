using MediatR;
using Microsoft.AspNetCore.Mvc;
using RecaptchaV3;
using Transfer.Subscription;

namespace DusanMalusev.Controllers
{
    [ApiController]
    [Route("api/subscribe")]
    public class SubscriptionController : ControllerBase
    {
        private readonly ISender _sender;
        private readonly ILogger<SubscriptionController> _logger;

        public SubscriptionController(ISender sender, ILogger<SubscriptionController> logger)
        {
            _sender = sender;
            _logger = logger;
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
                _ => Conflict(new { Message = "Already subscribed!" }),
                validation => UnprocessableEntity(validation.FirstOfAll()),
                databaseError =>
                {
                    _logger.LogError("An error has occurred: {@Database}", databaseError.Message);
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }
            );
        }
    }
}