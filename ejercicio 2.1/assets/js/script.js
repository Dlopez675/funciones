// Obtener referencia al elemento por su ID
const ele = document.getElementById("ele1");

// Definir la función pintar que cambia el color de fondo al hacer clic
function pintar(elemento) {
    elemento.style.backgroundColor = 'yellow';
}

// Añadir evento click al elemento
ele.addEventListener("click", function() {
    pintar(ele); // Llamar a la función pintar pasando el elemento clickeado
});
