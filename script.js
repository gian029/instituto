// Función para el registro de usuario
document.getElementById('formRegistro').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que el formulario recargue la página

  // Obtiene los valores del formulario
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;
  const contraseña = e.target.contraseña.value;

  // Simula el registro guardando la información en localStorage
  const usuario = { nombre, correo, contraseña };
  localStorage.setItem('usuario', JSON.stringify(usuario));

  // Muestra un mensaje de éxito
  alert('¡Te has registrado exitosamente!');
  e.target.reset(); // Limpia el formulario después del registro
});

// Función para la inscripción a un curso
document.getElementById('formInscripcion').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que el formulario recargue la página

  // Obtiene los valores del formulario de inscripción
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;
  const curso = e.target.curso.value;

  // Simula la inscripción guardando los datos en localStorage
  const inscripcion = { nombre, correo, curso };
  localStorage.setItem('inscripcion', JSON.stringify(inscripcion));

  // Muestra un mensaje de confirmación
  alert('¡Te has inscrito exitosamente en el curso!');
  e.target.reset(); // Limpia el formulario después de la inscripción
});

// Función para el envío de consultas de contacto
document.getElementById('formContacto').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que el formulario recargue la página

  // Obtiene los valores del formulario de contacto
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;
  const mensaje = e.target.mensaje.value;

  // Simula el envío de la consulta (en un sistema real se enviaría a un servidor)
  console.log('Mensaje enviado:', { nombre, correo, mensaje });

  // Muestra un mensaje de éxito
  alert('¡Tu mensaje ha sido enviado correctamente!');
  e.target.reset(); // Limpia el formulario después de enviar el mensaje
});

// Función para el funcionamiento del slider
let currentSlide = 0;

const slides = document.querySelectorAll('.slider .slides img');
const paginacion = document.querySelectorAll('.paginacion span');

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1; // Si estamos en la primera imagen, vamos a la última
  } else if (index >= slides.length) {
    currentSlide = 0; // Si estamos en la última imagen, volvemos a la primera
  } else {
    currentSlide = index;
  }

  // Ocultamos todas las imágenes y mostramos solo la actual
  slides.forEach(slide => slide.style.display = 'none');
  slides[currentSlide].style.display = 'block';

  // Actualizamos los puntos de paginación
  paginacion.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.style.backgroundColor = '#4CAF50'; // Color del punto activo
    } else {
      dot.style.backgroundColor = '#bbb'; // Color de los puntos inactivos
    }
  });
}

// Configuración para pasar entre imágenes automáticamente (cada 5 segundos)
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

// Configuración inicial del slider
showSlide(currentSlide);

// Función para cambiar al hacer clic en los puntos de paginación
paginacion.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});