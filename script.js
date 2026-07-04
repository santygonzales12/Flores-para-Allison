const mensaje = `Hola Allison ❤️

Quería hacerte esta pequeña sorpresa porque eres una persona muy especial para mí.

No soy el mejor expresando lo que siento, pero quería que supieras que me haces muy feliz.

Gracias por cada sonrisa, por cada momento y simplemente por existir.

Te amo muchísimo. ❤️`;

function escribirTexto() {

    const texto = document.getElementById("texto");
    texto.innerHTML = "";

    let i = 0;

    const velocidad = setInterval(() => {

        texto.innerHTML += mensaje.charAt(i);

        i++;

        if (i >= mensaje.length) {

            clearInterval(velocidad);

            lanzarCorazones();

        }

    }, 35);

}

function iniciarSorpresa() {

    document.getElementById("boton").style.display = "none";

    const contador = document.getElementById("contador");

    let numero = 3;

    contador.innerHTML = numero;

    const tiempo = setInterval(() => {

        numero--;

        if (numero > 0) {

            contador.innerHTML = numero;

        } else if (numero === 0) {

            contador.innerHTML = "❤️";

        } else {

            clearInterval(tiempo);

            contador.style.display = "none";

            mostrarFlores();

        }

    }, 1000);

}

function mostrarFlores() {

    const flores = document.getElementById("flores");

    flores.classList.remove("oculto");

    const girasoles = document.querySelectorAll(".girasol");

    girasoles.forEach((flor, i) => {

        setTimeout(() => {

            flor.animate(
                [
                    { transform: "scale(0)" },
                    { transform: "scale(1.2)" },
                    { transform: "scale(1)" }
                ],
                {
                    duration: 900,
                    fill: "forwards"
                }
            );

        }, i * 500);

    });

    setTimeout(() => {

        document.getElementById("carta").classList.remove("oculto");

        escribirTexto();

    }, 2200);

}

function lanzarCorazones() {

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            const corazon = document.createElement("div");

            corazon.innerHTML = "❤️";

            corazon.style.position = "fixed";
            corazon.style.left = Math.random() * 100 + "vw";
            corazon.style.top = "100vh";
            corazon.style.fontSize = (18 + Math.random() * 20) + "px";
            corazon.style.pointerEvents = "none";
            corazon.style.animation = "subir 5s linear forwards";

            document.body.appendChild(corazon);

            setTimeout(() => {

                corazon.remove();

            }, 5000);

        }, i * 120);

    }

}

const estilo = document.createElement("style");

estilo.innerHTML = `
@keyframes subir{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-120vh);
opacity:0;
}
}
`;

document.head.appendChild(estilo);
