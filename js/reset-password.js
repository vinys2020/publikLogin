document.addEventListener('DOMContentLoaded', function () {
    var resetPasswordForm = document.getElementById('resetPasswordForm');

    resetPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtiene los valores del formulario
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;

        // Obtiene los usuarios almacenados en el localStorage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Busca el usuario por correo electrónico y nombre de usuario
        const user = storedUsers.find(u => u.email === email && u.username === username);

        if (user) {
            // Muestra la contraseña al usuario en el campo de contraseña
            document.getElementById('password').value = user.password;
        } else {
            // Muestra un mensaje si no se encuentra la cuenta correspondiente
            alert('No se encontró ninguna cuenta con este correo electrónico y nombre de usuario.');
        }
    });
});
