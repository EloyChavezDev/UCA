document.addEventListener("DOMContentLoaded", function () {
    // Datos de la base de datos en formato JSON
    var users = [
        { id: 1, name: "Juan", age: 25 },
        { id: 2, name: "María", age: 30 },
        { id: 3, name: "Pedro", age: 22 }
    ];

    // Función para mostrar usuarios en la interfaz
    function showUsers() {
        var userList = document.getElementById("user-list");

        // Limpiamos la lista antes de mostrar los usuarios
        userList.innerHTML = "";

        // Iteramos sobre los usuarios y los mostramos en la lista
        users.forEach(function (user) {
            var listItem = document.createElement("li");
            listItem.innerText = `${user.name}, ${user.age} años`;
            userList.appendChild(listItem);
        });
    }

    // Llamamos a la función para mostrar usuarios al cargar la página
    showUsers();
});