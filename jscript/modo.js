document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const modoClaroBtn = document.getElementById('modo-claro');
  const modoOscuroBtn = document.getElementById('modo-oscuro');

  // Aplicar el modo guardado si existe
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'oscuro') {
    body.classList.add('dark-mode');
  }

  // Botón modo claro
  modoClaroBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    localStorage.setItem('modo', 'claro');
  });

  // Botón modo oscuro
  modoOscuroBtn.addEventListener('click', () => {
    body.classList.add('dark-mode');
    localStorage.setItem('modo', 'oscuro');
  });
});
