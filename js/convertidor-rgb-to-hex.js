//convierte un valor numérico en un string con radix hexadecimal
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? '0' + hex : hex;
}

//utiliza la función componentToHex con cada variable y devuelve un string de los valores concatenados
function rgbToHex(r, g, b) {
	let red = componentToHex(r);
	let green = componentToHex(g);
	let blue = componentToHex(b);

	return '#' + red + green + blue;
}

