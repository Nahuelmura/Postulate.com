window.onload = ListadoProfesion();

function ListadoProfesion() {
    $.ajax({
        url: '../../TiposProfesion/ListadoProfesion',
        data: {},
        type: 'POST',
        dataType: 'json',
        success: function (TiposProfesion) {

            // $("#ModalTipoEjercicio").modal("hide");
            // LimpiarModal();

            let contenidoTabla = ``;

            $.each(TiposProfesion, function (index, Profesion) { 
                
                { 
                    
                
                contenidoTabla += `
                    <tr>
                        <td>${Profesion.nombre}</td>
                        <td>${Profesion.matricula}</td>

                       
                        <td class="text-center"></td>
                        
                        <td class="text-center"></td>
                        <td class="text-center">
                        <button type="button" class="btn btn-success" onclick="AbrirModalEditar(${Profesion.profesionID})"> <i class="fa-regular fa-pen-to-square"></i> Editar</button>
                        <button type="button" class="btn btn-danger" onclick="EliminarProfesion(${Profesion.profesionID})"> <i class="fa-regular fa-trash-can"></i> Eliminar  </button>
                    </tr>`;
                }
            });

            document.getElementById("tbody-Profesion").innerHTML = contenidoTabla;
        },
        error: function (xhr, status) {
            alert('Disculpe, existió un problema al deshabilitar');
        }

    });



}

function GuardarProfesion() {


    // valor del modal
    let ProfesionID = document.getElementById("ProfesionID").value;
    let nombreProfesion = document.getElementById("nombreProfesion").value;
    let matricula = document.getElementById("matricula").value;


    $.ajax({
        url: '../../TiposProfesion/GuardarProfesion',
        data: { ProfesionID: ProfesionID, nombre: nombreProfesion,matricula:matricula},
        type: 'POST',
        dataType: 'json',
        success: function (resultado) {

           
       
            ListadoProfesion();
        },
        error: function (xhr, status) {

            alert('Disculpe, existió un problema al guardar la actividad');
        }
    });
    }

    function EliminarProfesion(profesionID) {
        $.ajax({
            // la URL para la petición
            url: '../../TiposProfesion/EliminarProfesion',
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            data: { profesionID: profesionID },
            // especifica si será una petición POST o GET
            type: 'POST',
            // el tipo de información que se espera de respuesta
            dataType: 'json',
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (Respuesta) {
                
                ListadoProfesion();
            },
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                console.log('Disculpe, existió un problema al consultar el registro para eliminado');
            }
        });
    }
