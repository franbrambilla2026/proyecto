
const formulario = document.getElementById("formulario");
const boton = document.getElementById("comprobar");
const resultado = document.getElementById("resultado");

const respuestasCorrectas = {
    p1: "b",
    p2: "a",
    p3: "b",
    p4: "a",
    p5: "b"
};

const respuestasTexto = {
    p1: "1899",
    p2: "Escuelas Pías",
    p3: "1928",
    p4: "1995",
    p5: "La educación y la fe"
};

boton.addEventListener("click", function() {

    let puntaje = 0;

    for (let i = 1; i <= 5; i++) {

        const pregunta = "p" + i;
        const opciones = document.getElementsByName(pregunta);

        const correccion = document.getElementById("correccion" + i);
        const bloque = document.getElementById("pregunta" + i);

        let respuestaElegida = "";

        for (let j = 0; j < opciones.length; j++) {

            if (opciones[j].checked) {
                respuestaElegida = opciones[j].value;
            }
        }

        bloque.style.backgroundColor = "";

        if (respuestaElegida === "") {

            correccion.textContent = "No respondiste esta pregunta.";
            correccion.style.color = "#b8860b";
            bloque.style.backgroundColor = "#fff0cc";

        } else if (respuestaElegida === respuestasCorrectas[pregunta]) {

            puntaje++;

            correccion.textContent = "¡Respuesta correcta!";
            correccion.style.color = "green";
            bloque.style.backgroundColor = "#d9f2df";

        } else {

            correccion.textContent =
                "Respuesta incorrecta. La correcta es: " +
                respuestasTexto[pregunta];

            correccion.style.color = "red";
            bloque.style.backgroundColor = "#f8dddd";
        }
    }

    resultado.textContent = "Puntaje final: " + puntaje + " de 5.";

    if (puntaje === 5) {

        resultado.textContent += " ¡Excelente trabajo!";

    } else if (puntaje >= 3) {

        resultado.textContent += " ¡Muy bien!";

    } else {

        resultado.textContent += " ¡Seguí practicando!";
    }
});

formulario.addEventListener("reset", function() {

    resultado.textContent = "";

    for (let i = 1; i <= 5; i++) {

        const correccion = document.getElementById("correccion" + i);
        const bloque = document.getElementById("pregunta" + i);

        correccion.textContent = "";
        correccion.style.color = "";
        bloque.style.backgroundColor = "";
    }
});
