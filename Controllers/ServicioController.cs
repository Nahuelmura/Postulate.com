using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Postulate.Data;
using Postulate.Models;

namespace Postulate.Controllers
{
    public class ServiciosController : Controller
    {
        private readonly ILogger<ServiciosController> _logger;
        private readonly ApplicationDbContext _context;

        public ServiciosController(ILogger<ServiciosController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            var profesiones = _context.Profesiones.ToList();
            profesiones.Add(new Profesion { ProfesionID = 0, Nombre = "[SELECCIONE...]" });

            ViewBag.ProfesionID = new SelectList(profesiones.OrderBy(c => c.Nombre), "ProfesionID", "Nombre");
            ViewBag.ProfesionBuscarID = new SelectList(profesiones.OrderBy(c => c.Nombre), "ProfesionID", "Nombre");

          var personas = _context.Personas.ToList();
            personas.Add(new Persona { PersonaID = 0, Nombre = "[SELECCIONE...]" });

            ViewBag.PersonaID = new SelectList(personas.OrderBy(c => c.Nombre), "PersonaID", "Nombre");
            ViewBag.BuscarPersonaID = new SelectList(personas.OrderBy(c => c.Nombre), "PersonaID", "Nombre");


          
            return View("Servicio");
        }

        public JsonResult CardServicios(int? id)
        {
            var servicios = _context.Servicios
                .Select(e => new VistaServicio
                {
                    ServicioID = e.ServicioID,
                    PersonaID = e.PersonaID,
                    ProfesionID = e.ProfesionID,
                    ImagenID = e.ImagenID,
                    NombrePersona = e.Persona.Nombre,
                    NombreProfesion=e.Profesion.Nombre,
                    TelefonoPersona = e.Persona.Telefono,
                    Herramienta = e.Herramienta,
                    Descripcion = e.Descripcion,
                    Titulo = e.Titulo,
                    Institucion = e.Institucion
                }).ToList();

            if (id != null)
            {
                servicios = servicios.Where(t => t.ServicioID == id).ToList();
            }

            return Json(servicios);
        } 

    
   public JsonResult AgregarServicio(int id,int ServicioID, int PersonaID, int ProfesionID, int? ImagenID, string? nombrePersona, string? nombreProfesion, int? telefonoPersona, bool herramienta, string? descripcion, string? titulo, string? Institucion)
        {
           string resultado ="";

           if ( ServicioID ==0 )
           {

           
            var servicio = new Servicio
            {
                ServicioID = ServicioID,
                PersonaID = PersonaID,
                ProfesionID = ProfesionID,
                 ImagenID = ImagenID,
                
                Herramienta = herramienta,
                Descripcion = descripcion,
                Titulo = titulo,
                Institucion = Institucion
            };

            _context.Add(servicio);
            _context.SaveChanges();

            return Json(new { success = true, message = "Servicio guardado exitosamente." });
            }
            else
            {
                
        // Actualizar un servicio existente
        var servicioEditar = _context.Servicios.FirstOrDefault(e => e.ServicioID == ServicioID);
             if (servicioEditar != null)
        {
            servicioEditar.PersonaID = PersonaID;
            servicioEditar.ProfesionID = ProfesionID;
            servicioEditar.ImagenID = ImagenID;
            servicioEditar.Herramienta = herramienta;
            servicioEditar.Descripcion = descripcion;
            servicioEditar.Titulo = titulo;
            servicioEditar.Institucion = Institucion;

            _context.Update(servicioEditar);
            _context.SaveChanges();

            return Json(new { success = true, message = "Servicio actualizado exitosamente." });
        }
        else
        {
            return Json(new { success = false, message = "Servicio no encontrado." });
        }
        }
        

        
        
    }
    
//     public JsonResult ObtenerServicio(int id)
// {
//     var servicio = _context.Servicios.FirstOrDefault(s => s.ServicioID == id);
//     if (servicio == null)
//     {
//         return Json(new { success = false, message = "Servicio no encontrado." });
//     }

//     return Json(new { success = true, servicio });
// }
// }



}


}
  

