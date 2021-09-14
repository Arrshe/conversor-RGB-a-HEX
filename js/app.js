//guardar en una variable la función de convertirAHex() que se activa haciendo click en submit
var enviar = document.getElementById('submitConversor');
enviar.addEventListener('click', convertirAHex);

//guardar en una variable la función de volverAtras() que se activa haciendo click en submit
var volver = document.getElementById('volver');
volver.addEventListener('click', volverAtras);

//despliega una alerta con el resultado de la función rgbToHex()
function convertirAHex() {
	//recoger en una variable elcontenido del input R y convertirlo a un número
	var r = Number(document.getElementById('red').value);
	//recoger en una variable elcontenido del input G y convertirlo a un número
	var g = Number(document.getElementById('green').value);
	//recoger en una variable elcontenido del input B y convertirlo a un número
	var b = Number(document.getElementById('blue').value);
    
    var hexadecimal = rgbToHex(r, g, b);

    esconderContenedorConversor();
    desplegarContenedorResultado();
    escribir(hexadecimal);
	//alert(rgbToHex(r, g, b));
}

//vuelve a cargar la página
function volverAtras(){
    //esconderContenedorResultado();
    //desplegarContenedorConversor();
    location.reload();
}

//crea un párrafo y escribe el resultado convertido a hexadecimal
function escribir(h){
    var resultado = document.createElement("p");
    resultado.classList.add("resultado");
    resultado.innerHTML = h;
    document.getElementById("contenedor-resultado").appendChild(resultado); 
}

