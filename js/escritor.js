//crea un párrafo y escribe el resultado convertido a hexadecimal
function escribir(h) {
	var resultado = document.createElement('p');
	resultado.classList.add('resultado');
	resultado.innerHTML = h;
	document.getElementById('contenedor-resultado').appendChild(resultado);
}