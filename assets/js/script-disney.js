let preguntas = [
    {
        text: "¿En qué película de Disney aparece por primera vez Mickey Mouse?",
        content: "<img src='https://lumiere-a.akamaihd.net/v1/images/de_mickeymouseclubhouse-mitmachmorgen_hero_r_82c8aca0.jpeg' style='object-fit: cover;'/>",
        opciones: ["Steamboat Willie", "Blancanieves y los siete enanitos", "La Cenicienta", "El Rey León"],
        puntaje: [5, 0, 0, 0]
    },
    {
        text: "¿De qué película es este fragmento musical?",
        content: `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuibd5xAsBtL0mbXP71ZIWjQ_DpG5ZqF_1MiFu4zgbbO7J_OXLNXeHjYRMJPJXeNWZWU&usqp=CAU' style='object-fit: cover;'/>
        <audio controls loop src='assets/audio/enredados.mp4'>Tu navegador no soporta audio HTML5.</audio>`,
        opciones: ["Enredados", "Intensamente", "Elementos", "Monsters, Inc."],
        puntaje: [5, 0, 0, 0]
    },
    {
        text: "¿Qué actor prestó su voz al genio en la versión original de Aladdín de Disney en 1992?",
        content: "<img src='https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/25/2092186933-1d3b97ba2a497b598d7cb0da4c374d39.jpg' style='object-fit: cover;'/>",
        opciones: ["Eddie Murphy", "Jim Carrey", "Will Smith", "Robin Williams"],
        puntaje: [5, 0, 0, 0]
    },
    {
        text: "¿Cuál es el nombre del león protagonista en El Rey León?",
        content: "<img src='https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/12/21/6584c5e38d044.png' style='object-fit: cover;'/>",
        opciones: ["Simba", "Mufasa", "Eddie Murphy", "Scar"],
        puntaje: [5, 0, 0, 0]
    },
    {
        text: "¿En qué película de Disney aparece el personaje de Elsa?",
        content: "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-V2uru209ztyZEAK7DZuGBFqK67pXVdyPcfVstI64WZwQS1kW_DEue0j74nyqO69cT8&usqp=CAU' style='object-fit: cover;'/>",
        opciones: ["Frozen", "La Sirenita", "Mulán", "Blancanieves y los Siete Enanitos"],
        puntaje: [5, 0, 0, 0]
    }
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
        // Cambiar el contenido de la pregunta (imagen o audio)
        document.getElementById("contenido-pregunta").innerHTML = preguntas[i].content;
        // Cambiar el texto de las alternativas
        document.getElementById("op1").innerHTML = preguntas[i].opciones[0];
        document.getElementById("op2").innerHTML = preguntas[i].opciones[1];
        document.getElementById("op3").innerHTML = preguntas[i].opciones[2];
        document.getElementById("op4").innerHTML = preguntas[i].opciones[3];
        // Actualizar la barra de progreso
        document.getElementById("barra-progreso").value = (i + 1) * 100 / preguntas.length; // Sumar 1 al índice para mostrar correctamente el progreso
    } else {
        // Mostrar resultado final
        mostrarResultado();
    }
}

// Función para actualizar el puntaje
function actualizarPuntaje(opcion) {
    // Obtener el puntaje de la opción seleccionada
    let puntajeOpcion = preguntas[i].puntaje[opcion];

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
    card.innerHTML += `<img class='resultado-imagen' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsQkucrPS5gYlhSaBYIGr9MJ9Msd4mwtZ6z11AEieaPHc-VoE9q45dPEd-YEI98CvL_M&usqp=CAU'>`; // Aquí debes reemplazar con la URL de la imagen que desees mostrar
    card.innerHTML += `<p class='resultado-obtenido'>Has obtenido ${puntaje} puntos. 🎉</p>`;
    // Actualizar la barra de progreso al 100%
    document.getElementById("barra-progreso").value = 100;
}
