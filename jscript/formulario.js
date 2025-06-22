document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario-contacto');
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const asunto = document.getElementById('asunto');
  const consulta = document.getElementById('consulta');
  const resultado = document.getElementById('mensaje-resultado');
  const telefono = document.getElementById('telefono'); // ✅ Campo teléfono agregado

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreVal = nombre.value.trim();
    const emailVal = email.value.trim();
    const asuntoVal = asunto.value.trim();
    const consultaVal = consulta.value.trim();
    const telefonoVal = telefono.value.trim(); 

    // Valida campos vacíos
    if (!nombreVal || !emailVal || !asuntoVal || !consultaVal || !telefonoVal) {
      mostrarMensaje('Por favor, completá todos los campos.', 'red');
      return;
    }

    // Valida formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      mostrarMensaje('Ingresá un email válido.', 'red');
      return;
    }

    // Valida formato de teléfono: solo números, entre 7 y 15 dígitos
    const telefonoRegex = /^\d{5,9}$/;
    if (!telefonoRegex.test(telefonoVal)) {
      mostrarMensaje('El teléfono debe tener solo números (7 a 15 dígitos).', 'red');
      return;
    }

    // Formulario ok
    mostrarMensaje(
      `Gracias por tu contacto, <strong>${nombreVal}</strong>. <br> En breve te estaré respondiendo.`,
      'green'
    );

    form.reset();
  });

  function mostrarMensaje(texto, color) {
    resultado.innerHTML = texto;
    resultado.style.color = color;
    resultado.style.opacity = '1';
    resultado.style.transition = 'opacity 1s ease';

    setTimeout(() => {
      resultado.style.opacity = '0';
    }, 4000);
  }
});

