// auth.js
// auth.js
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
  });
  