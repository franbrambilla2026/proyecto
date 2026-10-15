
const formulario = document.getElementById("cuestionario");
const resultado = document.getElementById("resultado");

const respuestasCorrectas = {
    p1: "b",
    p2: "a",
    p3: "b",
    p4: "a",
    p5: "b"
};

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let puntaje = 0;
    let preguntasRespondidas = 0;

    for (const pregunta in respuestasCorrectas) {
        const respuesta = formulario.querySelector(
            `input[name="${pregunta}"]:checked`
        );

        if (respuesta) {
            preguntasRespondidas++;

            if (respuesta.value === respuestasCorrectas[pregunta]) {
                puntaje++;
            }
        }
    }

    if (preguntasRespondidas < 5) {
        resultado.textContent = "Respondé todas las preguntas antes de comprobar.";
        return;
    }

    resultado.textContent =
        `¡Terminaste! Tu puntaje es ${puntaje} de 5.`;

    if (puntaje === 5) {
        resultado.textContent += " ¡Excelente!";
    } else if (puntaje >= 3) {
        resultado.textContent += " ¡Muy bien!";
    } else {
        resultado.textContent += " Podés volver a intentarlo.";
    }
});

formulario.addEventListener("reset", function() {
    resultado.textContent = "";
});
