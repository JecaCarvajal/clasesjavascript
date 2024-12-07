//Pasos del juego
// 1. Si la posicion seleccionada esta dentro de las posiciones de las bombas(randomNumbers), 
    //se pinta la bomba y poner el sonido de la bomba y 
    //eliminar los listener
// 2. Si no cae en la bomba, tienen que agregar la clase circulo y mostrar en pantalla una sumatoria de puntos 



const gameBoard = document.querySelector("#gameboard");
const play = document.getElementById("play");
const inicialSound = document.getElementById("inicial");
const bombSound = document.getElementById("bombsound");
const info = document.getElementById("info");
const puntos = document.getElementById("puntos");
const squareNumbers = 16;

let startCells = [];
let randomNumbers = new Set();
let contandor = 0;

play.addEventListener("click", () => {
    //inicialSound.play();
    const squares = document.querySelectorAll(".square");
    if(squares.length) {
        squares.forEach(square => square.remove());
    }
    createSquares();
    createRandomNumber();
    createBoard();
    info.textContent = "";
    puntos.textContent = "";
    contandor = 0;
})

function createSquares(){
    startCells = [];
    for (let index = 0; index < squareNumbers; index++) {

        startCells.push("");    
    }
}

function createRandomNumber(){
    
    randomNumbers.clear();

    while (randomNumbers.size < 5) {
        const randomNumber = Math.floor(Math.random()*16);
        randomNumbers.add(randomNumber);
    }
} 


function createBoard() {   
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index;
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement);
    }); 
}

function addGo(event) {

    const allSqueares = document.querySelectorAll(".square");
    const goDisplay = document.createElement("div");
    
    if(randomNumbers.has(parseInt(event.target.id))) {
       bombSound.play();
       goDisplay.classList.add("bomb");
       goDisplay.textContent = "💣";
       event.target.append(goDisplay);
       allSqueares.forEach(square => square.replaceWith(square.cloneNode(true)));
       info.textContent = "Haz perdido muchacho(a)";
    } else {
       goDisplay.classList.add("circle");
       contandor = contandor + 1;
       puntos.textContent = `Puntos : ${contandor}`;
       event.target.append(goDisplay);  
    }
    
    event.target.removeEventListener("click", addGo);
}