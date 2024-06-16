let colorActual = ""; // Variable global para almacenar el color actual

function cambiarColorPrincipal(color) {
    colorActual = color;
    let keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = colorActual;
}

function crearNuevoDiv(color) {
    let nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '1px solid black';
    nuevoDiv.style.marginBottom = '10px'; // Espacio entre los divs

    // Agregar el nuevo div al cuerpo del documento
    document.body.appendChild(nuevoDiv);
}

// Event listener para cambiar el color principal
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        cambiarColorPrincipal('pink'); // Cambiar a color rosado
    } else if (event.key === 's') {
        cambiarColorPrincipal('orange'); // Cambiar a color naranja
    } else if (event.key === 'd') {
        cambiarColorPrincipal('skyblue'); // Cambiar a color celeste
    } else if (event.key === 'q') {
        crearNuevoDiv('purple'); // Crear div nuevo con color morado
    } else if (event.key === 'w') {
        crearNuevoDiv('gray'); // Crear div nuevo con color gris
    } else if (event.key === 'e') {
        crearNuevoDiv('brown'); // Crear div nuevo con color café
    }
});