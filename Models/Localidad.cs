using System.ComponentModel.DataAnnotations;

namespace Postulate.Models;

public class Localidad
{
    [Key]
    public int LocalidadID { get; set; }
    public int ProvinciaID  { get; set; }
    public string? Nombre { get; set; }
    public int CodigoPostal { get; set; }
}
