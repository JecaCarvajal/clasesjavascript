const gameBoard = document.querySelector("#gameboard");
const info = document.getElementById("info");

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
    // if mas corto 
    go = go === "circle" ? "cross" : "circle";    
    event.target.append(goDisplay);
    event.target.removeEventListener("click", addGo);
    checkScore();
}


function checkScore()
{
    const allSqueares = document.querySelectorAll(".square");

    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
        const circleWinds = array.every(cell => allSqueares[cell].firstChild?.classList.contains("circle"))
        if(circleWinds) {
            info.innerHTML = "Circle Wins!";
            allSqueares.forEach(square => square.replaceWith(square.cloneNode(true)));
        }
    })

    winningCombos.forEach(array => {
        const circleWinds = array.every(cell => allSqueares[cell].firstChild?.classList.contains("cross"))
        if(circleWinds) {
            info.innerHTML = "Cross Wins!";
            allSqueares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    })
}






