window.onload = ListadoLocalidad();

function ListadoLocalidad() {
    $.ajax({
        url: '../../Localidad/ListadoLocalidad',
        data: {},
        type: 'POST',
        dataType: 'json',
        success: function (Localidades) {

            // $("#ModalTipoEjercicio").modal("hide");
            // LimpiarModal();

            let contenidoTabla = ``;

            $.each(Localidades, function (index, Localidad) { 
                
                { 
                    
                
                contenidoTabla += `
                    <tr>
                       <td>${Localidad.provinciaNombre}</td>
                        <td>${Localidad.nombre}</td>
                         <td>${Localidad.codigoPostal}</td>

                       
                        <td class="text-center"></td>
                        
                        <td class="text-center"></td>
                        <td class="text-center">
                        <button type="button" class="btn btn-success" onclick="AbrirModalEditar(${Localidad.localidadID})"> <i class="fa-regular fa-pen-to-square"></i> Editar</button>
                        <button type="button" class="btn btn-danger" onclick="EliminarLocalidad(${Localidad.localidadID})"> <i class="fa-regular fa-trash-can"></i> Eliminar  </button>
                    </tr>`;
                }
            });

            document.getElementById("tbody-Localidades").innerHTML = contenidoTabla;
        },
        error: function (xhr, status) {
            alert('Disculpe, existió un problema al deshabilitar');
        }

    });



}

function GuardarLocalidad() {
   
    let localidadID = document.getElementById("LocalidadID").value;
    let provinciaID = document.getElementById("ProvinciaID").value; 
    let nombreLocalidad = document.getElementById("nombreLocalidad").value;
    let codigoPostal = document.getElementById("CodigoPostal").value;


    $.ajax({
        url: '../../Localidad/GuardarLocalidad',
        data: {
            localidadID: localidadID,
            provinciaID: provinciaID,
            nombre: nombreLocalidad,
            codigoPostal: codigoPostal
        },
        type: 'POST',
        dataType: 'json',
        success: function (resultado) {
            ListadoLocalidad();
        },
        error: function (xhr, status) {
            alert('Disculpe, existió un problema al guardar la actividad');
        }
    });
}
    function AbrirModalEditar(LocalidadID) {

        $.ajax({
            url: '../../Localidad/ListadoLocalidad',
            data: { id: LocalidadID },
            type: 'POST',
            dataType: 'json',
            success: function (localidades) {
                let localidad = localidades[0];
    
                document.getElementById("LocalidadID").value = LocalidadID;
                // $("#ModalTitulo").text("Editar Tipo De ejercico");
                document.getElementById("nombreLocalidad").value = localidad.nombre;
                document.getElementById("CodigoPostal").value = localidad.codigoPostal;
                $("#ModalLocalidad").modal("show");
    
            },
            error: function (xhr, status) {
    
                alert('Disculpe, existió un problema ');
            }
    
        });
    
    }
    function EliminarLocalidad(LocalidadID) {
        var confirmacion = confirm("¿Desea eliminar esta localidad?");
        if (confirmacion) {
        $.ajax({
            // la URL para la petición
            url: '../../Localidad/EliminarLocalidad',
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            data: { LocalidadID: LocalidadID },
            // especifica si será una petición POST o GET
            type: 'POST',
            // el tipo de información que se espera de respuesta
            dataType: 'json',
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (Respuesta) {
                
                ListadoLocalidad();
            },
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                console.log('Disculpe, existió un problema al consultar el registro para eliminado');
            }

            
        });
    }



}