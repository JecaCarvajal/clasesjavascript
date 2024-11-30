const gameBoard = document.querySelector("#gameboard");
const play = document.getElementById("play");
const inicialSound = document.getElementById("inicial");
const squareNumbers = 16;

let go = "circle";

const startCells = [];

play.addEventListener("click", () => {
    inicialSound.play();
    const squares = document.querySelectorAll(".square");
    if(squares.length)
    {
        squares.forEach(square => square.remove());
    }
    CreateSquares();
    createBoard();
})

function CreateSquares()
{
    for (let index = 0; index < squareNumbers; index++) {
        startCells.push("");    
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
    goDisplay.classList.add(go);
    
    if(go === "circle") {
        go = "cross";
    }
    else {
        go = "circle"
    }

    event.target.append(goDisplay);
    event.target.removeEventListener("click", addGo);
}






