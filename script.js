const mensaje = `Hola Allison ❤️

Quería hacerte esta pequeña sorpresa porque eres una persona muy especial para mí.

No soy el mejor expresando lo que siento, pero quería que supieras que me haces muy feliz.

Gracias por cada sonrisa, por cada momento y simplemente por existir.

Te amo muchísimo. ❤️`;

function escribirTexto(){

    const texto=document.getElementById("texto");

    texto.innerHTML="";

    let i=0;

    const intervalo=setInterval(()=>{

        texto.innerHTML+=mensaje.charAt(i);

        i++;

        if(i>=mensaje.length){

            clearInterval(intervalo);

        }

    },35);

}

function iniciarSorpresa(){

    document.getElementById("boton").style.display="none";

    const contador=document.getElementById("contador");

    let numero=3;

    contador.innerHTML=numero;

    const tiempo=setInterval(()=>{

        numero--;

        if(numero>0){

            contador.innerHTML=numero;

        }else{

            clearInterval(tiempo);

            contador.innerHTML="❤️";

            setTimeout(mostrarCarta,1000);

        }

    },1000);

}

function mostrarCarta(){

    document.getElementById("contador").style.display="none";

    const flores=document.getElementById("flores");

    flores.classList.remove("oculto");

    const girasoles=document.querySelectorAll(".girasol");

    girasoles.forEach((flor,index)=>{

        setTimeout(()=>{

            flor.animate([

                {transform:"scale(0)"},

                {transform:"scale(1.2)"},

                {transform:"scale(1)"}

            ],{

                duration:900,

                fill:"forwards"

            });

        },index*500);

    });

    setTimeout(()=>{

        document.getElementById("carta").classList.remove("oculto");

        escribirTexto();

    },2200);

}
