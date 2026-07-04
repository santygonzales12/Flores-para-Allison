function mostrarMensaje(){

document.getElementById("mensaje").style.display="block";

for(let i=0;i<30;i++){

let corazon=document.createElement("div");

corazon.innerHTML="❤️";

corazon.style.position="fixed";
corazon.style.left=Math.random()*100+"vw";
corazon.style.top="100vh";
corazon.style.fontSize=(20+Math.random()*25)+"px";
corazon.style.animation="subir 5s linear forwards";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},5000);

}

}

const estilo=document.createElement("style");

estilo.innerHTML=`
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
