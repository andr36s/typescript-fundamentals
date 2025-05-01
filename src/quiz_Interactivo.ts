// Crea un array de preguntas, cada una con:
// - pregunta, opciones (array), respuestaCorrecta
// Función jugarQuiz():
// - Muestra preguntas (una por una).
// - Recibe respuesta del usuario (prompt si estás en navegador).
// - Al final, muestra cuántas respondió bien.

console.log("--------------Ejercicio Quiz interactivo---------------");

interface PreguntasInterface {
  pregunta: string;
  opciones: {};
  respuestaCorrecta: string;
}

let preguntas: PreguntasInterface[] = [
  {
    pregunta: "¿Cuanto es 10 + 10?",
    opciones: {},
    respuestaCorrecta: "20",
  },
  {
    pregunta: "¿Cuanto es 4 + 4?",
    opciones: {},
    respuestaCorrecta: "8",
  },
  {
    pregunta: "¿Cuanto es 1 + 1?",
    opciones: {},
    respuestaCorrecta: "2",
  },
  {
    pregunta: "¿Cuanto es la mitad de 4?",
    opciones: {},
    respuestaCorrecta: "2",
  },
];

const jugarQuiz = () => {
  let sumaDeCorrectas = 0;

  for (let i = 0; i < preguntas.length; i++) {
    console.log(preguntas[i].pregunta);
    let respuesta = prompt(preguntas[i].pregunta);

    if (preguntas[i].respuestaCorrecta == respuesta) {
      sumaDeCorrectas++;
      console.log(
        "Es correcto la respuesta es,",
        preguntas[i].respuestaCorrecta
      );
    } else {
      console.log(
        "Falso, la respuesta correcta es,",
        preguntas[i].respuestaCorrecta
      );
    }
  }

  return sumaDeCorrectas;
};

console.log("¿Cuantas preguntas ha respondido correctamente?:", jugarQuiz());
