using Microsoft.AspNetCore.Mvc;

namespace DusanMalusev.Controllers;

[Route("csrf-token")]
public class CsrfTokenController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return NoContent();
    }
}