let textNombre = document.getElementById('saludo');
console.log(textNombre);

textNombre.innerHTML = `Hola ${localStorage.getItem('nombre')}`;

