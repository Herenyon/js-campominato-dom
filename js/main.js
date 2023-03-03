'use strict'

// funzioni


function myCreateElement(htmlElement, coloreCelle, numeroCelle, className, htmlValue) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;




    element.addEventListener('click', function () {
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

    if (selectModeValue === 'easyMode') {
        className
        mode = selectModeValue;
        cellNumber = 100;



    }
    else if (selectModeValue === 'midMode') {
        mode = selectModeValue;
        cellNumber = 81;

    }

    else {

        mode = selectModeValue;
        cellNumber = 49;


    }

    console.log(mode);
    console.log(cellNumber);


    for (let i = 1; i <= cellNumber; i++) {

        console.log(i)
        const createElement = myCreateElement('div', 'colore-celle', cellNumber, mode, i);
        myAppendElement(containerBoard, createElement);

    }
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