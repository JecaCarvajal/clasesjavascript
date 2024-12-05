//Pasos del juego
// 1.Tenemos crear un arreglo que me indique donde estan las bombas de forma aleatoria *
// 2.


const gameBoard = document.querySelector("#gameboard");
const play = document.getElementById("play");
const inicialSound = document.getElementById("inicial");
const squareNumbers = 16;

let startCells = [];
let randomNumbers = new Set();

play.addEventListener("click", () => {
    inicialSound.play();
    const squares = document.querySelectorAll(".square");
    if(squares.length)
    {
        squares.forEach(square => square.remove());
    }
    createSquares();
    createRandomNumber();
    createBoard();
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
    const goDisplay = document.createElement("div");
    goDisplay.classList.add("bomb");
    goDisplay.textContent = "💣";
    event.target.append(goDisplay);
    event.target.removeEventListener("click", addGo);
}






