document.addEventListener("DOMContentLoaded", function () {
  // Verifica si el usuario ha iniciado sesión
  var isLoggedIn = false;  // Reemplaza esto con tu lógica de verificación de sesión

  // Obtén las opciones de la barra de navegación
  var navOptions = document.querySelectorAll(".navbar-nav a");

  // Recorre las opciones y deshabilita aquellas que requieren inicio de sesión
  navOptions.forEach(function (option) {
    // Comprueba si el enlace tiene la clase "nav-link" y no es la opción de contacto
    if (option.classList.contains("nav-link") && !option.classList.contains("modal-trigger")) {
      // Si la opción requiere autenticación y el usuario no ha iniciado sesión, deshabilita el enlace
      if (option.getAttribute("data-auth") === "true" && !isLoggedIn) {
        option.setAttribute("href", "javascript:void(0);");
        option.addEventListener("click", function () {
          alert("Debes iniciar sesión para acceder a esta opción.");
        });
      }
    }
  });
  
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
      // Si la autenticación es exitosa, redirige al usuario a index.html
      window.location.href = "pagina.html";
      return;
    } else {
      // Muestra un mensaje de error en caso de autenticación fallida
      alert("Nombre de usuario o contraseña incorrectos");
    }
  });
});
