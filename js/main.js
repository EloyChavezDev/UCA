document.getElementById('boton2').addEventListener('click',function(){
    alert('Hola mundo');
})

//Solucion 1

const showName = () => {
    const name = document.querySelector('#name').value;
    window.alert(`Nombre: ${name}`);
  };
  
  const button = document.querySelector('.button button2');
  button.addEventListener('click', showName);