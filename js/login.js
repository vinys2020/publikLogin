document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtiene los valores de usuario y contraseña
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Obtiene los usuarios almacenados en el localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica si el usuario y contraseña coinciden con algún usuario almacenado
    const userFound = storedUsers.find(user => user.username === username && user.password === password);

    if (userFound) {
      // Si la autenticación es exitosa, redirige al usuario a pagina.html
      window.location.href = "pagina.html";
    } else {
      // Muestra un mensaje de error en caso de autenticación fallida
      alert("Nombre de usuario o contraseña incorrectos");
    }
  });

  var registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtiene los valores de usuario y contraseña para el registro
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Simula el almacenamiento de nuevos usuarios (reemplaza con tu lógica real)
    const newUser = {
      username: newUsername,
      password: newPassword,
    };

    // Obtiene los usuarios existentes o inicializa un array vacío
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica si el usuario ya está registrado
    const isUserRegistered = existingUsers.some(user => user.username === newUsername);

    if (isUserRegistered) {
      alert("El nombre de usuario ya está registrado. Por favor, elige otro.");
    } else {
      // Agrega el nuevo usuario al array
      existingUsers.push(newUser);

      // Guarda el array actualizado en el localStorage
      localStorage.setItem("users", JSON.stringify(existingUsers));

      // Muestra un mensaje de éxito
      alert(`Nuevo usuario registrado: ${newUsername}`);
    }
  });
});
