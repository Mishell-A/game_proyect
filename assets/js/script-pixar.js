// Array para las preguntas
let preguntas = [
    { 
      text: "¿A qué película hace referencia?", 
      content: "<div class='emojis'>🐭​🍳​👨‍🍳​👩‍🍳​❤️</div>" 
    },
    { 
      text: "¿A qué película pertenece este sonido?", 
      content: ` <img class='up' src='https://th.bing.com/th/id/R.70b387cca17bf279da5909c3fcfe51b3?rik=I06xNoqSmyhvqg&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fimage_uploads%2fRatatouille-ratatouille-847440_1280_1024.jpg&ehk=24ULC8KcOa1hdiUQ8Zj8MLpgD3ZnZvD8A60hoE6VMc0%3d&risl=&pid=ImgRaw&r=0' alt='Descripción de la imagen'>
        <audio controls loop src='assets/audio/Cuando me amo.mp4'>Sonido</audio>`
    },
    { 
      text: "¿Qué personaje es conocido por su miedo extremo a los tiburones y qué evento en su pasado lo desencadenó?", 
      content: "<img src='https://tupersonajefavorito.com/wp-content/uploads/2018/05/Buscando-a-Nemo-03.jpg'>" 
    },
    {
      text: "En 'Los Increíble', ¿Qué poderes tienen los hermanos Dash y Violet Parr?", 
      content: "<img src='https://i.blogs.es/599176/los-increibles-poster/1366_2000.jpg' alt='Imagen de Berk'>"
    },
    {
      text: "¿Cuál es el nombre del tren de pensamiento que transporta recuerdos a largo plazo en la mente de Riley?", 
      content: "<img src='https://th.bing.com/th/id/OIP.PiksiFAnZp2b4RP0dzg9ywHaEK?rs=1&pid=ImgDetMain,' alt='Imagen de Un jefe en pañales'>"
    }
  ];
  
  // Array de opciones multidimensional
  let opciones = [
    [
      "Cars",
      "Soul",
      "Valiente",
      "Ratatouille"
    ],
    [
      "Intensamente",
      "Coco",
      "Toy Story",
      "Up: Una aventura de altura"
    ],
    [ 
      "Dory; fue atrapada en una red de pesca junto a un tiburón",
      "Marlin; fue atacado por un tiburón cuando era joven",
      "Nemo; fue secuestrado por un tiburón durante una excursión escolar",
      "Bruce; fue maltratado por un pescador cuando era una cría"
    ],
    [
      "Dash tiene supervelocidad y Violet tiene invisibilida",
      "Dash tiene telequinesis y Violet tiene control mental",
      "Dash tiene control sobre el fuego y Violet tiene superfuerza",
      "Dash tiene habilidades acuáticas y Violet tiene teletransportación"
    ],
  
    [
      "Transportador de Memorias",
      "Tren de Memoria Larga",
      "Tren del Pensamiento",
      "Recordatorio"
    ]
  ];
  
  // Array de puntajes por opción
  let puntajePorOpcion =  [
    [0, 0, 0, 5],
    [0, 0, 5, 0],
    [0, 5, 0, 0],
    [5, 0, 0, 0],
    [0, 0, 5, 0]
  ]
  
  // Variables necesarias
  let puntaje = 0;
  let i = 0;
  
  // Asignar los eventos a los botones
  document.getElementById("op1").addEventListener('click', function () {
    actualizarPuntaje(0);
  });
  
  document.getElementById("op2").addEventListener('click', function () {
    actualizarPuntaje(1);
  });
  
  document.getElementById("op3").addEventListener('click', function () {
    actualizarPuntaje(2);
  });
  
  document.getElementById("op4").addEventListener('click', function () {
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
    card.innerHTML += "<img class= 'resultado-imagen' src='https://th.bing.com/th/id/OIP.6MHSp_TyKEEo2LLoOYUVdAHaFj?rs=1&pid=ImgDetMain' alt='Resultado de la trivia'>";
    card.innerHTML += `<p class='resultado-obtenido'>Has obtenido ${puntaje} puntos. 🎉</p>`;
  
     
    // Actualizar la barra de progreso al 100%
    document.getElementById("barra-progreso").value = 100;
  }
  
  
  
  
  