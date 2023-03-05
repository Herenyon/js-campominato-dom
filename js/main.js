'use strict'

// funzioni


function myCreateElement(htmlElement, mode, htmlValue) {
    const element = document.createElement(htmlElement);
    // element.classList.add(coloreCelleRosso);
    // element.classList.add(mode);
    element.innerText = htmlValue;
    // element.classList.add(coloreCelleBlu);
    if (mode === 'easyMode') {
        

        element.classList.add('celle-10');
    }

    else if (mode === 'midMode') {
        
        element.classList.add('celle-8');
    }

    else if (mode === 'hardMode') {
        
        element.classList.add('celle-7');
    }




    return element;
}




function myAppendElement(containerElement, htmlElement) {

    containerElement.append(htmlElement);
}



function createGrid(cellNumber, griglia, numeroBombe) {
    for (let i = 1; i <= cellNumber; i++) {

        console.log(i)
        const createElement = myCreateElement('div',griglia, i);
        myAppendElement(containerBoard, createElement);

    }
}


// NON TOCCARE
function grandezzaGriglia(selectModeValue) {

    let mode;
    if (selectModeValue === 'easyMode') {
        mode = selectModeValue;

    }

    else if (selectModeValue === 'midMode') {
        mode = selectModeValue;
        
    }

    else if (selectModeValue === 'hardMode') {
        mode = selectModeValue;

    }
    return mode;

}

// NON TOCCARE
function numeroCelle(selectModeValue) {

    let cellNumber;

    if (selectModeValue === 'easyMode') {       
        cellNumber = 100;
    }
    else if (selectModeValue === 'midMode') {        
        cellNumber = 81;
    }

    else {   
        cellNumber = 49;
    }

    return cellNumber;

}

// NON TOCCARE
function randomNumber(cellNumber) {

    let bombe = [];

    while (bombe.length < 16) {

        let numeroBombe = Math.floor(Math.random() * cellNumber) + 1;

        if (bombe.indexOf(numeroBombe) === -1) {

            bombe.push(numeroBombe);
        }

    }

    return bombe;
}




// main



const playButton = document.getElementById('play');

const containerBoard = document.querySelector('.board');

let buttonValue = false;










// element.addEventListener('click', function () {

//     for (let i = 0; i < cellNumber; i++)
//         if (bombe[i] === cellNumber) {
//             element.classList.add(coloreCelleRosso);
//             location.reload();
//         }
//         else {

//             element.classList.add(coloreCelleBlu);
//         }

//     console.log(htmlValue);


// }
// )



playButton.addEventListener('click',
    
function () {
    const selectMode = document.getElementById('mode');
    const selectModeValue = selectMode.value;


    const cellNumber = numeroCelle(selectModeValue);
    console.log(cellNumber);
    const griglia = grandezzaGriglia(selectModeValue);
    console.log(griglia);
    const bombe = randomNumber(cellNumber);
    console.log(bombe);
    
    if (buttonValue) {
        location.reload();
        buttonValue = false;

    }
    else {

        createGrid(cellNumber, griglia, bombe);
        buttonValue = true;
        document.getElementById('play').value = "Rispristina";

    }
}

)