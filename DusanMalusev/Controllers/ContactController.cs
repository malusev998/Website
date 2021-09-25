using Microsoft.AspNetCore.Mvc;

namespace DusanMalusev.Controllers
{
    [Route("/api/contact-me")]
    [ApiController]
    public class ContactController : Controller
    {
        public ContactController()
        {

        }

        [HttpPost]
        public async Task<IActionResult> MessageMe()
        {
            return Ok();
        }
    }
}
