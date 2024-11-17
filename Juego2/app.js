// 1. Agregar cuadrado 1 y cuadra 2.( Trayendo de una imagen cuadrado, crear el cuadrado mediente css basado utilizando div, canvas) OK
// 2. Una funcion que detecte las teclas. (ArrowUp, ArrowDown, ArrowRight, ArrowLeft --> Escuchar estos eventos)
// 3. Agregar moviento basado en la teclas al cuadrado  --> Agregar la logica para mover cuadrado en su posicion
// 4. Crear funcion que detecte que los cuadrados se encontraron --> Agregar funcion para verificar cuando los cuadrados se encuentren (Lanzar el mensaje)
// 5. Que el player tenga un tiempo para atrapar a target --> establer un SetTimer y manejarlo para el player
// 6. Que si el player no atrapa el tarjet a tiempo, el player no se puede mover mas. --> Remover el Evento
// 7. Contar las veces que el player atrapo al target. --> Crear una variable que almacene el numero de atrapadas y se ve en la pantalla

let timeoutID;
let contandor = 0;

const player = document.getElementById("player");
const target = document.getElementById("target");
const contadorElement = document.getElementById("contador");

function moveTarget() {
    target.style.left =  `${Math.random() * (window.innerWidth -50)}px`;
    target.style.top =  `${Math.random() * (window.innerHeight -50)}px`;  
}

function setOutput(){
    document.removeEventListener('keydown', handleKeyDown);
    alert("Eres muy lento");
}

function playerTime()
{
    timeoutID = setTimeout(setOutput, 4000);
}

moveTarget();
playerTime();



function handleKeyDown(event) {
    const key = event.key;
    const currentTop = parseInt(window.getComputedStyle(player).top, 10);
    const currentLeft = parseInt(window.getComputedStyle(player).left, 10);  
    

    if(key === 'ArrowUp')
    {
        player.style.top = `${currentTop - 10}px`;
    }
    if(key === 'ArrowDown')
    {
        player.style.top = `${currentTop + 10}px`;
    }
    if(key === 'ArrowLeft')
    {
        player.style.left = `${currentLeft - 10}px`;
    }
    if(key === 'ArrowRight')
    {
        player.style.left = `${currentLeft + 10}px`;
    }

    const playerRect = player.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    if(
        playerRect.left < targetRect.right &&
        playerRect.right > targetRect.left &&
        playerRect.top < targetRect.bottom &&
        playerRect.bottom > targetRect.top
    ){
        alert("Lo atrapaste");
        clearTimeout(timeoutID);
        playerTime();
        moveTarget();
        contandor = contandor + 1;
        contadorElement.textContent = `Veces atrapadas : ${contandor}`;
    }
}

document.addEventListener('keydown', handleKeyDown);