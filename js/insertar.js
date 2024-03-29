//Cambiar contenido con innerHTML
function cambiarContenido(){
    var div = document.getElementById("miDiv");
    //modificando contenido
    div.innerHTML = "<h1>Nuevo Titulo hecho con innerHTML</h1><p>Contenido Nuevo con innerHTML</p>";
  }

//Cambiar con createTextNode
function cambiarContenido2(){
    var div = document.getElementById("miDiv");

    //creamos nuevo nodo de texto
    var nuevoTexto = document.createTextNode("Titulo Nuevo 2 hecho con createTextNode");

    //Agregamos el nodo al div
    div.appendChild(nuevoTexto);

    //Creamos otro nodo de texto
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Contenido nuevo con createTextNode";

    //Agregamos el parrafo al div
    div.appendChild(nuevoParrafo);
}

function pedirGalletas(){
  // Simulamos una peticion al servidor
  const pedido = "Galletas de chocolate";

  // Creamos la respuesta
  const respuesta = "Tu pedido de "+ pedido + " ha sido enviado";

  // Mostramos la respuesta al cliente
  const elementosRespuesta = document.getElementById("respuesta");
  elementosRespuesta.textContent = respuesta;
  elementosRespuesta.style.display="block";
}