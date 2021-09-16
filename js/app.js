//guardar en una variable la función de convertirAHex() que se activa haciendo click en submit
var enviar = document.getElementById('submitConversor');
enviar.addEventListener('click', convertirAHex);

//guardar en una variable la función de volverAtras() que se activa haciendo click en submit
var volver = document.getElementById('volver');
volver.addEventListener('click', volverAtras);

//despliega una alerta con el resultado de la función rgbToHex()
function convertirAHex() {
	validarValores();
}

//vuelve a cargar la página
function volverAtras() {
	location.reload();
}

