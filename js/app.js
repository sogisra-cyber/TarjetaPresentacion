const boton = document.getElementById('toggle-theme');
const cuerpo = document.body;

boton.addEventListener('click', () => {
    // Alternar la clase 'dark-mode' en el body
    cuerpo.classList.toggle('dark-mode');

    // Cambiar el texto del botón según el estado
    if (cuerpo.classList.contains('dark-mode')) {
        boton.textContent = '☀️ Modo Dia';
    } else {
        boton.textContent = '🌙 Modo Noche';
    }
});