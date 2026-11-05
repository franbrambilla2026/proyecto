
document.getElementById("comprobar").addEventListener("click", function() {

    let puntaje = 0;

    let p1 = document.querySelector('input[name="p1"]:checked');
    let p2 = document.querySelector('input[name="p2"]:checked');
    let p3 = document.querySelector('input[name="p3"]:checked');
    let p4 = document.querySelector('input[name="p4"]:checked');
    let p5 = document.querySelector('input[name="p5"]:checked');

    if (!p1 || !p2 || !p3 || !p4 || !p5) {
        document.getElementById("resultado").innerHTML =
        "Debes responder las cinco preguntas.";
        return;
    }

    // Respuestas correctas
    if (p1.value === "b") puntaje++;
    if (p2.value === "a") puntaje++;
    if (p3.value === "b") puntaje++;
    if (p4.value === "a") puntaje++;
    if (p5.value === "b") puntaje++;

    let mensaje = "<h3>Resultado: " + puntaje + "/5 puntos</h3>";

    if (puntaje === 5) {
        mensaje += "¡Felicitaciones! Has respondido correctamente todas las preguntas.";
    } else if (puntaje === 2) {
        mensaje += "Buen intento. Has respondido correctamente dos preguntas.";
    } else {
        mensaje += "Te invito a intentarlo nuevamente.";
    }

    document.getElementById("resultado").innerHTML = mensaje;

});


document.getElementById("reiniciar").addEventListener("click", function() {

    let opciones = document.querySelectorAll('input[type="radio"]');

    for (let opcion of opciones) {
        opcion.checked = false;
    }

    document.getElementById("resultado").innerHTML = "";

});
