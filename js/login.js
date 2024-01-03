document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtiene los valores de usuario y contraseña
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Simula una autenticación exitosa (reemplaza con tu lógica real)
      var isLoginSuccessful = (username === "adm" && password === "adm");
  
      if (isLoginSuccessful) {
        // Si la autenticación es exitosa, redirige al usuario a index.html
        window.location.href = "pagina.html";
      } else {
        // Muestra un mensaje de error en caso de autenticación fallida
        alert("Nombre de usuario o contraseña incorrectos");
      }
    });
  });
  