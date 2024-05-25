using System.ComponentModel.DataAnnotations;

namespace Postulate.Models;

public class Persona
{
    [Key]
    public int PersonaID { get; set; }
    public int LocalidadID { get; set; }
    public int ProvinciaID { get; set; }
    public string? Apellido { get; set; }
    public int Edad { get; set; }
    public int Telefono { get; set; }
    public int Documento { get; set; }
    public string? Email { get; set; }
}