// Array para las preguntas
let preguntas = [
  {
    text: "¿A qué película hace referencia?",
    content: "<p class='emojis'>🐉🔥🏰</p>"
  },
  {
    text: "¿A qué película pertenece este sonido?",
    content: `
      <img class='up' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg26-La3wMjbi_ayVklPiBJCchNW5our5eHXpAPOJa6o7BqDIL6Ej1RB8Hs_wTtE3t0o2sBbFhhyphenhyphenyVgIOwiusBP4U_3MfPg4GYZq6ORcmYdJuvmNMook8zVrYqO-geN9G4Z2yqKciUZVco/s1600/dreamworks.png' alt='Descripción de la imagen'>
      <audio controls loop src='./assets/audio/KUNG-FU PANDA - Kung-Fu Fighting (Canción Completa)  Subtitulada Español + Lyrics.mp3'>Sonido</audio>
    `
  },
  {
    text: "¿Cómo se llama el dragón que es el compañero inseparable de Hipo en 'Cómo entrenar a tu dragón'?",
    content: "<img src='https://estaticos.elcolombiano.com/documents/10157/0/1080x600/0c0/0d0/none/11101/EGQV/image_content_32718734_20190128114438.jpg' alt='Imagen de Cómo entrenar a tu dragón'>"
  },
  {
    text: "En la película 'Cómo entrenar a tu dragón', ¿cuál es el nombre del pueblo vikingo donde vive Hipo?",
    content: "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTbDjL_aTwTFy-c7wZbYv58iUjk9qAO_7fw&s' alt='Imagen de Berk'>"
  },
  {
    text: "En 'Un jefe en pañales', ¿cuál es el nombre del hermano mayor que inicialmente desconfía del bebé?",
    content: "<img src='https://m.media-amazon.com/images/S/pv-target-images/36bee1203a4c5bffe0b4de921c21672e2a4770f522eb30a5f444c6472a56d3f5._SX1080_FMjpg_.jpg' alt='Imagen de Un jefe en pañales'>"
  }
];

// Array de opciones multidimensional
let opciones = [
  ["Cómo entrenar a tu dragón", "Madagascar", "El espantatiburones", "Shrek"],
  ["Bee Movie", "Kung Fu Panda", "El Gato con Botas", "Monstruos contra alienígenas"],
  ["Tormenta", "Zumbíto", "Chimuelo", "Patán"],
  ["Berk", "Arendelle", "DunBroch", "Avalor"],
  ["Chris", "Mike", "Tim", "Alex"]
];

// Array de puntajes por opción
let puntajePorOpcion = [
  [0, 0, 0, 5], // Puntajes para la primera pregunta
  [0, 5, 0, 0], // Puntajes para la segunda pregunta
  [0, 0, 5, 0], // Puntajes para la tercera pregunta
  [5, 0, 0, 0], // Puntajes para la cuarta pregunta
  [0, 0, 5, 0]  // Puntajes para la quinta pregunta
];

// Variables necesarias
let puntaje = 0;
let i = 0;

// Asignar los eventos a los botones
document.getElementById("op1").addEventListener('click', function() {
  actualizarPuntaje(0);
});

document.getElementById("op2").addEventListener('click', function() {
  actualizarPuntaje(1);
});

document.getElementById("op3").addEventListener('click', function() {
  actualizarPuntaje(2);
});

document.getElementById("op4").addEventListener('click', function() {
  actualizarPuntaje(3);
});

// Llamamos a la función de siguientePregunta para iniciar el cuestionario
siguientePregunta();

// Función para pasar a la siguiente pregunta
function siguientePregunta() {
  if (i < preguntas.length) {
    // Cambiar el texto de la pregunta
    document.getElementById("pregunta").innerHTML = preguntas[i].text;
    // Cambiar el contenido de la pregunta (emojis, audio, imagen)
    document.getElementById("contenido-pregunta").innerHTML = preguntas[i].content;
    // Cambiar el texto de las alternativas
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    // Actualizar la barra de progreso
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;

  } else {
    // Mostrar resultado final
    mostrarResultado();
  }
}

// Función para actualizar el puntaje
function actualizarPuntaje(opcion) {
  // Obtener el puntaje de la opción seleccionada
  let puntajeOpcion = puntajePorOpcion[i][opcion];

  // Sumar el puntaje obtenido al puntaje total
  puntaje += puntajeOpcion;

  // Incrementar el índice de la pregunta para pasar a la siguiente
  i++;

  // Pasar a la siguiente pregunta
  siguientePregunta();
}

// Función para mostrar el resultado final
function mostrarResultado() {
  let card = document.querySelector(".card");
  // Vaciar el contenido actual
  card.innerHTML = "";

  // Mostrar resultados
  card.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";
  card.innerHTML += "<img class= 'resultado-imagen' src='https://cdn.leonardo.ai/users/4579849f-75ea-4dbd-8b43-ad27309ab1c8/generations/57bf25c0-6996-490f-a81c-ba8b9525a626/Default_Create_an_vibrant_and_lively_celebratory_image_featuri_3.jpg'>";
  card.innerHTML += `<p class='resultado-obtenido'>Has obtenido ${puntaje} puntos. 🎉</p>`;
  // Actualizar la barra de progreso al 100%
  document.getElementById("barra-progreso").value = 100;
}




