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
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
  
    // Crea un mensaje con todos los datos
    const mensaje = "Nombre: " + nombre + "\n" +
                   "Correo electrónico: " + correo + "\n" +
                   "Dirección: " + direccion;
  
    // Muestra la información en una ventana emergente
    alert(mensaje);
  
    // Previene que el formulario se envíe
    return false;
  }

//Solucion 3
  function mostrarDatos() {
    // Obtiene los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
  
    // Crea un elemento para mostrar los datos
    const datosElement = document.getElementById("datos");
  
    // Crea un mensaje con todos los datos
    const mensaje = "<h2>Datos capturados</h2>" +
                   "<p>Nombre: " + nombre + "</p>" +
                   "<p>Correo electrónico: " + correo + "</p>" +
                   "<p>Dirección: " + direccion + "</p>";
  
    // Inserta el mensaje en el elemento
    datosElement.innerHTML = mensaje;
  
    // Previene que el formulario se envíe
    return false;
  }