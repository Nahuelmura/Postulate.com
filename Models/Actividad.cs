using System.ComponentModel.DataAnnotations;

namespace Postulatea.Models;

public class Actividad 
{
    [Key]
    public int ActividadID { get; set; }
    public string? Nombre { get; set; }
}