using System.ComponentModel.DataAnnotations;

namespace Postulate.Models;

public class Servicio
{
    [Key]
    public int ServicioID { get; set; }
    public int PersonaID { get; set; }
    public int ProfesionID { get; set; }
    public bool Herramienta { get; set; }
    public byte Imagen { get; set; }
    public string? Descripcion  { get; set; }
    public string? Titulo { get; set; }
    public string? Institucion { get; set; }
    public virtual Persona Persona { get; set; }
    public virtual Profesion Profesion { get; set; }
}