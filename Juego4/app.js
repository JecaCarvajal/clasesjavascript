const gameBoard = document.querySelector("#gameboard");

//const startCells = ["","","","","","","","",""];

const startCells = ["155","5652","654","45544","5","54545","7","844","9"];

startCells.push("10")

/* startCells.forEach( (_cell, index) => {
    console.log(_cell)
    console.log(index)
}) */

const numeros = [10,2,3,4,5,6,7,8,9,10]

/* for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index] * 2);  
} */

numeros.forEach((numero, index) => {
    console.log(numero * 2)
    if( numero % 2 == 0){
        console.log("Numero par " + numero);
    }
    console.log(index);
});





