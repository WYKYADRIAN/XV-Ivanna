const fechaEvento = new Date("December 15, 2026 17:00:00").getTime();

const contador = setInterval(function () {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    document.getElementById("dias").innerText =
        dias.toString().padStart(2, "0");

    document.getElementById("horas").innerText =
        horas.toString().padStart(2, "0");

    document.getElementById("minutos").innerText =
        minutos.toString().padStart(2, "0");

    document.getElementById("segundos").innerText =
        segundos.toString().padStart(2, "0");


    if (diferencia < 0) {

        clearInterval(contador);

        document.querySelector(".reloj").innerHTML =
            "<h2>¡HOY ES EL GRAN DÍA! ❤️</h2>";

    }

}, 1000);
