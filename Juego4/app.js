const gameBoard = document.querySelector("#gameboard");

let go = "circle";

const startCells = ["","","","","","","","",""];

function createBoard() {   
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index;
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement);
    }); 
}

createBoard();

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






