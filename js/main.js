document.getElementById('boton2').addEventListener('click',function(){
    alert('Hola mundo');
})

//Solucion 1
function mostrarNombre() {
    // Obtiene el valor del campo "nombre"
    const nombre = document.getElementById("nombre").value;
  
    // Crea una ventana emergente con el valor del nombre
    alert("Nombre: " + nombre);
  
    // Previene que el formulario se envíe
    return false;
  }

//Solucion 2
function mostrarDatos() {
    // Obtiene los valores de los campos
    const nombre2 = document.getElementById("nombre2").value;
    const correo2 = document.getElementById("correo2").value;
    const direccion2 = document.getElementById("direccion2").value;
  
    // Crea un mensaje con todos los datos
    const mensaje = "Nombre: " + nombre2 + "\n" +
                   "Correo electrónico: " + correo2 + "\n" +
                   "Dirección: " + direccion2;
  
    // Muestra la información en una ventana emergente
    alert(mensaje);
  
    // Previene que el formulario se envíe
    return false;
  }

//Solucion 3
  function mostrarDatos2() {
    // Obtiene los valores de los campos
    const nombre3 = document.getElementById("nombre3").value;
    const correo3 = document.getElementById("correo3").value;
    const direccion3 = document.getElementById("direccion3").value;
  
    // Crea un elemento para mostrar los datos
    const datosElement = document.getElementById("datos");
  
    // Crea un mensaje con todos los datos
    const mensaje2 = "<h2>Datos capturados</h2>" +
                   "<p>Nombre: " + nombre3 + "</p>" +
                   "<p>Correo electrónico: " + correo3 + "</p>" +
                   "<p>Dirección: " + direccion3 + "</p>";
  
    // Inserta el mensaje en el elemento
    datosElement.innerHTML = mensaje2;
  
    // Previene que el formulario se envíe
    return false;
  }


  //Cambiar contenido con innerHTML
  function cambiarContenido(){
    var dir = document.getElementById("miDiv");

    //modificando contenido
    dispatchEvent.innerHTML = "<h1>Nuevo Titulo</h1><p>Contenido Nuevo</p>"
  }