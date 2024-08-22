document.getElementById('botton').addEventListener('click', obtenerNombre);

function obtenerNombre() {

    let nombre = document.getElementById('nombre').value;

    localStorage.setItem('nombre', nombre);
}
