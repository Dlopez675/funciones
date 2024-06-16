// Variable global para almacenar el color actual
let colorActual = "";

// Función para cambiar el color del div según la tecla presionada
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorActual = 'pink'; // Cambiar a color rosado
    } else if (event.key === 's') {
        colorActual = 'orange'; // Cambiar a color naranja
    } else if (event.key === 'd') {
        colorActual = 'skyblue'; // Cambiar a color celeste
    } 

    // Seleccionar el div por su id y cambiar el color de fondo
    let keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = colorActual;
});