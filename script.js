const mensaje = `Hola Allison.

Quería hacerte esta pequeña sorpresa porque eres una persona muy especial para mí.

No soy el mejor expresando lo que siento, pero quería que supieras que me haces muy feliz.

Gracias por cada sonrisa, por cada momento y simplemente por existir.

Con mucho cariño.

❤️`;

function escribirTexto() {

    const texto = document.getElementById("texto");

    texto.innerHTML = "";

    let i = 0;

    const intervalo = setInterval(() => {

        texto.innerHTML += mensaje.charAt(i);

        i++;

        if(i >= mensaje.length){

            clearInterval(intervalo);

        }

    },30);

}

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.innerHTML = "❤️";

    corazon.style.position = "fixed";
    corazon.style.left = Math.random()*100 + "vw";
    corazon.style.top = "100vh";
    corazon.style.fontSize = (20 + Math.random()*25) + "px";
    corazon.style.pointerEvents = "none";
    corazon.style.animation = "subir 5s linear forwards";

    document.body.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },5000);

}

function mostrarMensaje(){

    document.getElementById("mensaje").style.display = "block";

    escribirTexto();

    for(let i=0;i<80;i++){

        setTimeout(()=>{

            crearCorazon();

        },i*80);

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
