//comprobar valores
function validarValores(r, g, b) {
	//recoger en una variable elcontenido del input R y convertirlo a un número
	var r = document.getElementById('red').value;

	//recoger en una variable elcontenido del input G y convertirlo a un número
	var g = document.getElementById('green').value;

	//recoger en una variable elcontenido del input B y convertirlo a un número
	var b = document.getElementById('blue').value;
	if (r !== "") {
		var numR = Number(r);
	}

	if (g !== "") {
		var numG = Number(g);
	}

	if (b !== "") {
		var numB = Number(b);
	}

	if (r === "" || g === "" || b === "") {
		alert('Tienes que introducir un valor en el cuadro de texto');
	}
    
	if (numR < 0 || numG < 0 || numB < 0) {
		alert('Tienes que introducir un valor entre 0 y 255');
	} else if (numR > 255 || numG > 255 || numB > 255) {
		alert('Tienes que introducir un valor entre 0 y 255');
	} else if (numR >= 0 || (numR <= 255 && numG >= 0) || (numG <= 255 && numB >= 0) || numB <= 255) {
		var hexadecimal = rgbToHex(numR, numG, numB);

		esconderContenedorConversor();
		desplegarContenedorResultado();
		escribir(hexadecimal);
	}
}