'use strict'

// funzioni


function myCreateElement(htmlElement, coloreCelle, cellNumber, modalita, className, htmlValue) {
    const element = document.createElement(htmlElement);
    
    element.classList.add(className);
    element.innerText = htmlValue;

    if (modalita === 'easyMode') {

        element.classList.add('celle-10');
    }

    else if (modalita === 'midMode') {

        element.classList.add('celle-8');
    }

    else if (modalita === 'hardMode') {

        element.classList.add('celle-7');
    }


    element.addEventListener('click', function () {
        // let bombe = randomNumber(cellNumber);
        // console.log(bombe);
        
        element.classList.add(coloreCelle);

        console.log(htmlValue);


    }
    )
    return element;
}

function myAppendElement(containerElement, htmlElement) {

    containerElement.append(htmlElement);
}



function createGrid() {

    const selectMode = document.getElementById('mode');
    const selectModeValue = selectMode.value
    let mode;
    let cellNumber;
    let classeCelle;
    let bombe;

    if (selectModeValue === 'easyMode') {

        classeCelle = document.querySelector('.classe-10');
        mode = selectModeValue;
        cellNumber = 100;



    }
    else if (selectModeValue === 'midMode') {
        mode = selectModeValue;
        cellNumber = 81;
        classeCelle = document.querySelector('.classe-8');

    }

    else {

        mode = selectModeValue;
        cellNumber = 49;
        classeCelle = document.querySelector('.classe-7');

    }

    console.log(mode);
    console.log(cellNumber);

    // bombe = randomNumber(cellNumber);



    for (let i = 1; i <= cellNumber; i++) {

        console.log(i)
        const createElement = myCreateElement('div', 'colore-celle', cellNumber, mode, classeCelle, i);
        myAppendElement(containerBoard, createElement);

    }
}




function randomNumber(cellNumber) {

    let bombe = [];

    while (bombe.length < 16) {

        let numeroBombe = Math.floor(Math.random() * cellNumber) + 1;

        if (bombe.indexOf(numeroBombe) === -1){

            bombe.push(numeroBombe);
        }
        
    }
    
    return bombe;
}


// main



const playButton = document.getElementById('play');

const containerBoard = document.querySelector('.board');

let buttonValue = false;



playButton.addEventListener('click',
    function () {
        if (buttonValue) {
            location.reload();
            buttonValue = false;

        }
        else {

            createGrid();
            buttonValue = true;
            document.getElementById('play').value = "Rispristina";

        }
    }
)