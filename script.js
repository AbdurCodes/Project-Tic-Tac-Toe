const cells = document.querySelectorAll('.cell');
const desc = document.querySelector('.desc');
const gameboardDisplay = document.querySelector('.gameboard');
const dialog = document.querySelector("dialog");
const gameStatus = document.querySelector("dialog h2");
const gameWinner = document.querySelector("dialog p");
// const closeModalBtn = document.querySelector("dialog button");
const playGame = document.querySelector('#playGame');
const playNewGame = document.querySelector('#playNewGame');
const cellsArray = Array.from(cells);
const noMoreGames = document.querySelector('#nomoregames');

let turnNumber = 0;
gameboardDisplay.style.display = 'none';

function gameboard() {
    playGame.style.display = 'none';
    desc.style.display = 'none';
    gameboardDisplay.style.display = 'flex';
    cellsArray.forEach((box, index) => {
        box.addEventListener('click', () => {
            // alert(`Box ${index+1} clicked!`);
            // console.log(turnNumber+1);
            if (turnNumber <= 9) {
                if (box.textContent === '') {
                    turnNumber++;
                    if (turnNumber === 1 | turnNumber === 3 | turnNumber === 5 | turnNumber === 7 | turnNumber === 9) {
                        box.textContent = p1.sym;
                        console.log(turnNumber);
                        if (p1WinningMoves()) {
                            console.log('Player 1 wins.');
                            gameOver('Game Over!', 'Player 1 wins.');
                        }
                        if (turnNumber === 9) {
                            if (!p1WinningMoves()) {
                                console.log('Game draw!');
                                gameOver('Game Draw!', 'No one wins.');
                            }
                        }
                    }
                    else {
                        box.textContent = p2.sym;
                        console.log(turnNumber);
                        if (p2WinningMoves()) {
                            console.log('Player 2 wins.');
                            gameOver('Game Over!', 'Player 2 wins.');
                        }
                    }
                }
                else {
                    if (turnNumber <= 9) {
                        console.log('Plz click in an empty box');
                    }
                }
            }
        });
    })
}

function p1WinningMoves() {
    if (
        (cellsArray[0].textContent === p1.sym & cellsArray[1].textContent === p1.sym & cellsArray[2].textContent === p1.sym) | (cellsArray[3].textContent === p1.sym & cellsArray[4].textContent === p1.sym & cellsArray[5].textContent === p1.sym) | (cellsArray[6].textContent === p1.sym & cellsArray[7].textContent === p1.sym & cellsArray[8].textContent === p1.sym) | (cellsArray[0].textContent === p1.sym & cellsArray[3].textContent === p1.sym & cellsArray[6].textContent === p1.sym) | (cellsArray[1].textContent === p1.sym & cellsArray[4].textContent === p1.sym & cellsArray[7].textContent === p1.sym) | (cellsArray[2].textContent === p1.sym & cellsArray[5].textContent === p1.sym & cellsArray[8].textContent === p1.sym) | (cellsArray[0].textContent === p1.sym & cellsArray[4].textContent === p1.sym & cellsArray[8].textContent === p1.sym) | (cellsArray[2].textContent === p1.sym & cellsArray[4].textContent === p1.sym & cellsArray[6].textContent === p1.sym)
    ) {
        return true;
    }
}


function p2WinningMoves() {
    if (
        (cellsArray[0].textContent === p2.sym & cellsArray[1].textContent === p2.sym & cellsArray[2].textContent === p2.sym) | (cellsArray[3].textContent === p2.sym & cellsArray[4].textContent === p2.sym & cellsArray[5].textContent === p2.sym) | (cellsArray[6].textContent === p2.sym & cellsArray[7].textContent === p2.sym & cellsArray[8].textContent === p2.sym) | (cellsArray[0].textContent === p2.sym & cellsArray[3].textContent === p2.sym & cellsArray[6].textContent === p2.sym) | (cellsArray[1].textContent === p2.sym & cellsArray[4].textContent === p2.sym & cellsArray[7].textContent === p2.sym) | (cellsArray[2].textContent === p2.sym & cellsArray[5].textContent === p2.sym & cellsArray[8].textContent === p2.sym) | (cellsArray[0].textContent === p2.sym & cellsArray[4].textContent === p2.sym & cellsArray[8].textContent === p2.sym) | (cellsArray[2].textContent === p2.sym & cellsArray[4].textContent === p2.sym & cellsArray[6].textContent === p2.sym)
    ) {
        return true;
    }
}

function newGame() {
    for (let i = 0; i < cellsArray.length; i++) {
        cellsArray[i].textContent = '';
    }
    turnNumber = 0;
}

// function gameWinner() { 

// }

function gameOver(status, winner) {
    console.log('Game is over!');
    gameStatus.textContent = status;
    gameWinner.textContent = winner;
    // modal script
    dialog.showModal();
    // closeModalBtn.addEventListener("click", () => {
    //     dialog.close();
    // });
}


function createPlayer(name, sym) {
    return { name, sym };
}

let p1 = createPlayer('kiran', 'X');
let p2 = createPlayer('abdur', 'O');


playGame.addEventListener('click', ()=>{
    gameboard();
})
playNewGame.addEventListener('click', ()=>{
    newGame();
    dialog.close();
})
noMoreGames.addEventListener('click', ()=>{
    playGame.style.display = 'inline';
    desc.style.display = 'block';
    gameboardDisplay.style.display = 'none';
    newGame()
    dialog.close();
})


// strategy
// create gameboard first (generally a 3x3 grid)
// start the game
// player 1 turn: click in any box with X symbol
// player 1 turns include 1,3,5,7,9 (of total 9 turns)
// player 2 turn: click in any box with O symbol
// player 2 turns include 2,4,6,8 (of total 9 turns)
// if player 1 or player 2 clicks in boxes (8 possible winning positions)
// 1,2,3
// 4,5,6
// 7,8,9
// 1,4,7
// 2,5,8
// 3,6,9
// 1,5,9
// 3,5,7
// first, that player will win;
// game over
// play new game