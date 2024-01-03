document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añadir la clase "slide-up" para la animación hacia arriba
          entry.target.classList.add("loaded", "slide-up");
          observer.unobserve(entry.target);
        }
      });
    });

    // Observar todos los elementos con la clase "slide-up"
    const slideUpElements = document.querySelectorAll(".slide-up");
    slideUpElements.forEach(element => {
      observer.observe(element);
    });
  });


  function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}



window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});




var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 4500, // Cambiar cada 5 segundos (5000 milisegundos)
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  speed: 800,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper('.mySwiper2', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true, // Habilitar el bucle continuo
  autoplay: {
    delay: 500, // Retraso de 5 segundos entre transiciones (puedes ajustar según sea necesario)
    disableOnInteraction: false, // No detener el autoplay al interactuar manualmente
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  speed: 1200,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper('.mySwiper3', {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false, 

  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  speed: 800,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


document.addEventListener('DOMContentLoaded', cargarAgenda);

function cargarAgenda() {
  const agenda = JSON.parse(localStorage.getItem('agenda')) || [];
  mostrarContactos(agenda);
}

    function agregarContacto() {
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const nombreEmpresa = document.getElementById('nombreEmpresa').value;
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && telefono) {
            const agenda = JSON.parse(localStorage.getItem('agenda')) || [];
            agenda.push({ nombre, correo, telefono, nombreEmpresa, servicio, mensaje });
            localStorage.setItem('agenda', JSON.stringify(agenda));
            mostrarContactos(agenda);
            limpiarFormulario();
        }
    }

    function mostrarContactos(agenda) {
      const tablaContactos = document.getElementById('tablaContactos');
      tablaContactos.innerHTML = '';

      agenda.forEach((contacto, index) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td>${contacto.nombre}</td>
              <td>${contacto.correo}</td>
              <td>${contacto.telefono}</td>
              <td>${contacto.nombreEmpresa}</td>
              <td>${contacto.servicio}</td>
              <td>${contacto.mensaje}</td>
              <td>
                  <button class="btn btn-sm btn-outline-primary" onclick="editarContacto(${index})">Editar</button>
                  <button class="btn btn-sm btn-outline-danger" onclick="eliminarContacto(${index})">Eliminar</button>
              </td>
          `;
          tablaContactos.appendChild(tr);
      });
  }

  function filtrarPorServicio() {
    const filtroServicio = document.getElementById('filtroServicio').value;
    const agenda = JSON.parse(localStorage.getItem('agenda')) || [];
    
    if (filtroServicio === 'todos') {
        // Si se selecciona "Todos los Servicios", mostrar todos los contactos
        mostrarContactos(agenda);
    } else {
        // Filtrar y mostrar solo los contactos del servicio seleccionado
        const contactosFiltrados = agenda.filter(contacto => contacto.servicio === filtroServicio);
        mostrarContactos(contactosFiltrados);
    }
}

    function editarContacto(index) {
      const agenda = JSON.parse(localStorage.getItem('agenda')) || [];
      const contacto = agenda[index];

      // Puedes implementar la lógica para llenar el formulario con la información del contacto
      // Aquí puedes utilizar el ID del contacto para realizar una edición específica
      document.getElementById('nombre').value = contacto.nombre;
      document.getElementById('correo').value = contacto.correo;
      document.getElementById('telefono').value = contacto.telefono;
      document.getElementById('nombreEmpresa').value = contacto.nombreEmpresa;
      document.getElementById('servicio').value = contacto.servicio;
      document.getElementById('mensaje').value = contacto.mensaje;

      // Puedes eliminar el contacto antiguo si lo deseas
      agenda.splice(index, 1);

      // Guarda el vector actualizado en localStorage
      localStorage.setItem('agenda', JSON.stringify(agenda));

      // Muestra los contactos en la interfaz
      mostrarContactos(agenda);
  }

    function eliminarContacto(index) {
      const agenda = JSON.parse(localStorage.getItem('agenda')) || [];
      // Elimina el contacto del vector
      agenda.splice(index, 1);
      // Guarda el vector actualizado en localStorage
      localStorage.setItem('agenda', JSON.stringify(agenda));
      // Muestra los contactos en la interfaz
      mostrarContactos(agenda);
  }

    function limpiarFormulario() {
        document.getElementById('nombre').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('nombreEmpresa').value = '';
        document.getElementById('servicio').value = 'En que puedo ayudarte?';
        document.getElementById('mensaje').value = '';
    }

  