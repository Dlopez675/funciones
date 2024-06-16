// Obtener referencia al elemento por su ID
const ele = document.getElementById("ele1");

// Definir la función pintar que cambia el color de fondo al hacer clic
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

// Añadir evento click al elemento
ele.addEventListener("click", function() {
    pintar(ele, 'yellow'); // si no se agrega el argumento Yellow al hacer click sera verde por defecto
});