const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://eloychavezdev.github.io/UCA/JSON/productos.json');
xhr.onload = function() {
  if (xhr.status === 200) {
    const productos = JSON.parse(xhr.responseText);
    // Aquí puedes usar la información de los productos
  } else {
    console.error('Error al cargar la base de datos');
  }
};
xhr.send();