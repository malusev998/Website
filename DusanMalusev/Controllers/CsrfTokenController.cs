using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Mvc;

namespace DusanMalusev.Controllers
{
    [Route("csrf-token")]
    [ApiController]
    public class CsrfTokenController : Controller
    {
        private readonly IAntiforgery _csrf;

        public CsrfTokenController(IAntiforgery csrf)
        {
            _csrf = csrf;
        }

        [HttpGet]
        public IActionResult Index() => Ok(new
        {
            Token = _csrf.GetTokens(HttpContext)?.RequestToken
        });
    }
}
