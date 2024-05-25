using System.ComponentModel.DataAnnotations;
using System.Data;

namespace Postulate.Models;

public class Trabajo 
{
    [Key]
    public int TrabajoID { get; set; }
    public int PersonaID { get; set; }
    public int ServicioID { get; set; }
    public int ReseniaID { get; set; }
    public int ActividadID { get; set; }
    public string? Direccion { get; set; }
    public string? Descripcion { get; set; }
    public DateTime Horarios { get; set; }

}