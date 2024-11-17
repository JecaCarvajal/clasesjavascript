let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let opciones = document.getElementById("buttons");
let respuesta = document.createElement("h1");
respuesta.textContent = "Yo sabia, que te interesaba 😎";


button1.addEventListener("mouseover", () => CambiarRespuesta(button1, button2));

button2.addEventListener("mouseover", () => CambiarRespuesta(button2, button1));

button1.addEventListener("click", () => Responder(button1));

button2.addEventListener("click", () => Responder(button2));

function CambiarRespuesta(button1, button2){
  let texto = button1.textContent;
   if (texto !== "SI" ) {
     button1.textContent = "SI";
     button2.textContent = "NO";
   }
}

function Responder(button){ 
  let texto = button.textContent;
  if(texto === "SI") {
    opciones.appendChild(respuesta);
  }
}
