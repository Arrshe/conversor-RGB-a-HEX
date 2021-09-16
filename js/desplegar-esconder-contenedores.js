//función para que desaparezca el contenedor del conversor
function esconderContenedorConversor() {
    let esconderConversor2 = document.getElementById('contenedor-conversor').style.display = "none";
}

//función para mostrar el contenedor del resultado
function desplegarContenedorResultado() {
    let desplegarResultado = document.getElementById('contenedor-resultado').classList.remove("hidden");
}