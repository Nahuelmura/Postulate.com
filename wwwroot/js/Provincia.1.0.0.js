window.onload = ListadoProvincia();

function ListadoProvincia() {
    $.ajax({
        url: '../../Provincia/ListadoProvincia',
        data: {},
        type: 'POST',
        dataType: 'json',
        success: function (Provincias) {

            // $("#ModalTipoEjercicio").modal("hide");
            // LimpiarModal();

            let contenidoTabla = ``;

            $.each(Provincias, function (index, Provincia) { 
                
                { 
                    
                
                contenidoTabla += `
                    <tr>
                        <td>${Provincia.nombre}</td>

                       
                        <td class="text-center"></td>
                        
                        <td class="text-center"></td>
                        <td class="text-center">
                        <button type="button" class="btn btn-success" onclick="AbrirModalEditar(${Provincia.provinciaID})"> <i class="fa-regular fa-pen-to-square"></i> Editar</button>
                        <button type="button" class="btn btn-danger" onclick="EliminarProvincia(${Provincia.provinciaID})"> <i class="fa-regular fa-trash-can"></i> Eliminar  </button>
                    </tr>`;
                }
            });

            document.getElementById("tbody-Provincias").innerHTML = contenidoTabla;
        },
        error: function (xhr, status) {
            alert('Disculpe, existió un problema al deshabilitar');
        }

    });



}
function GuardarProvincia() {


    // valor del modal
    let ProvinciaID = document.getElementById("ProvinciaID").value;
    let nombreProvincia = document.getElementById("nombreProvincia").value;


    $.ajax({
        url: '../../Provincia/GuardarProvincia',
        data: { ProvinciaID: ProvinciaID, nombre: nombreProvincia },
        type: 'POST',
        dataType: 'json',
        success: function (resultado) {

           
       
            ListadoProvincia();
        },
        error: function (xhr, status) {

            alert('Disculpe, existió un problema al guardar la actividad');
        }
    });
    }

    function AbrirModalEditar(provinciaID) {

        $.ajax({
            url: '../../Provincia/ListadoProvincia',
            data: { id: provinciaID },
            type: 'POST',
            dataType: 'json',
            success: function (provincias) {
                let provincia = provincias[0];
    
                document.getElementById("ProvinciaID").value = provinciaID;
                // $("#ModalTitulo").text("Editar Tipo De ejercico");
                document.getElementById("nombreProvincia").value = provincia.nombre;
                $("#ModalProvincia").modal("show");
    
            },
            error: function (xhr, status) {
    
                alert('Disculpe, existió un problema ');
            }
    
        });
    
    }

    function EliminarProvincia(provinciaID) {
        $.ajax({
            // la URL para la petición
            url: '../../Provincia/EliminarProvincia',
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            data: { provinciaID: provinciaID },
            // especifica si será una petición POST o GET
            type: 'POST',
            // el tipo de información que se espera de respuesta
            dataType: 'json',
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (Respuesta) {
                
                ListadoProvincia();
            },
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                console.log('Disculpe, existió un problema al consultar el registro para eliminado');
            }
        });
    }
