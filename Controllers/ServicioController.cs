
using Microsoft.AspNetCore.Mvc;

using Postulate.Data;


namespace Postulate.Controllers;

public class ServiciosController : Controller
{
    private readonly ILogger<ServiciosController> _logger;
    
        private readonly ApplicationDbContext _context;

    public ServiciosController(ILogger<ServiciosController> logger,ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }
 
    public IActionResult Index()

    {

        



       return View("Servicio");
      
    }
    

    }
