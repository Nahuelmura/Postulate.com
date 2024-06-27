using System.ComponentModel.DataAnnotations;
using System.Data;

namespace Postulate.Models;

public class Trabajo 
{
    [Key]
    public int TrabajoID { get; set; }
    public int PersonaID { get; set; } // es la persona que necesita el trabajo //
    public int ProfesionID { get; set; }

     public int ImagenID  { get; set; }

    public string? Direccion { get; set; }
    public string? Descripcion { get; set; }
    public DateTime Hora { get; set; }
      public DateTime Fecha { get; set; }
 

   [Range(1, 5, ErrorMessage = "La calificación debe estar entre 1 y 5 estrellas.")]
    public int Valoracion { get; set; }

   public string? Comentario { get; set; }  // Comentario sobre ek trabajo realizado critica



    public virtual Persona Persona { get; set; }
    public virtual Profesion Profesion { get; set; }


     public virtual Imagen Imagen { get; set; }

    //  public virtual ICollection<ContratoRespondido> ContratosRespondidos { get; set; }


}