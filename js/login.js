document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtiene los valores de usuario y contraseña
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Obtiene los usuarios almacenados en el localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Utiliza una función de verificación de credenciales
    const isAuthenticated = checkCredentials(storedUsers, username, password);

    if (isAuthenticated) {
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

    // Obtiene los valores del formulario de registro
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Verifica si las contraseñas coinciden
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    // Obtiene los usuarios existentes o inicializa un array vacío
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Utiliza una función para verificar si el usuario ya está registrado
    const isUserRegistered = checkUserRegistration(existingUsers, newUsername);

    if (isUserRegistered) {
      alert("El nombre de usuario ya está registrado. Por favor, elige otro.");
    } else {
      // Crea un nuevo usuario
      const newUser = {
        fullName: fullName,
        email: email,
        username: newUsername,
        password: newPassword,
      };

      // Agrega el nuevo usuario al array
      existingUsers.push(newUser);

      // Guarda el array actualizado en el localStorage
      localStorage.setItem("users", JSON.stringify(existingUsers));

      // Muestra un mensaje de éxito
      alert(`Nuevo usuario registrado: ${newUsername}`);

      // Opcional: Redirige al usuario a la página de inicio de sesión
      window.location.href = "index.html";
    }
  });

  // Función para verificar las credenciales del usuario
  function checkCredentials(users, username, password) {
    return users.some(user => user.username === username && user.password === password);
  }

  // Función para verificar si el usuario ya está registrado
  function checkUserRegistration(users, username) {
    return users.some(user => user.username === username);
  }
  
});
