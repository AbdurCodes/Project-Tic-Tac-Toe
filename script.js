const cells = document.querySelectorAll('.cell');
const cellsArray = Array.from(cells);

const desc = document.querySelector('.desc');
const gameboardDisplay = document.querySelector('.gameboard');
const gameboardSection = document.querySelector('.gameboardSection');
const dialog = document.querySelector("dialog");
const dialogPlayersNames = document.querySelector("#dialogPlayersNames");
const closeModal = document.querySelector(".modalCloseBtn");
const gameStatus = document.querySelector("dialog h2");
const gameWinner = document.querySelector("dialog p");
// const closeModalBtn = document.querySelector("dialog button");
const playGame = document.querySelector('#playGame');
const playNewGame = document.querySelector('#playNewGame');
const noMoreGames = document.querySelector('#nomoregames');

let form = document.getElementById('myForm');
let turnDisplay = document.querySelectorAll('.turnDisplay');
const turnDisplayList = Array.from(turnDisplay);



let turnNumber = 0;
gameboardDisplay.style.display = 'none';
turnDisplayList[0].style.visibility = 'hidden';
turnDisplayList[0].textContent = player1Name + "'s turn";
turnDisplayList[1].style.visibility = 'hidden';
turnDisplayList[1].textContent = player2Name + "'s turn";
// console.log(turnDisplayList[0]);


function gameboard() {

    let player1Name = document.getElementById('player1Name').value;
    let player2Name = document.getElementById('player2Name').value;
    console.log(player1Name);
    console.log(player2Name);

    turnDisplayList[0].style.visibility = 'visible';
    turnDisplayList[0].textContent = player1Name + "'s turn";
    
    turnDisplayList[1].style.visibility = 'hidden';
    turnDisplayList[1].textContent = player2Name + "'s turn";
    // console.log(turnDisplayList);
    // console.log(turnDisplayList[0]);

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

                        turnDisplayList[0].style.visibility = 'hidden';
                        player2Name = document.getElementById('player2Name').value;
                        turnDisplayList[1].style.visibility = 'visible';
                        turnDisplayList[1].textContent = player2Name + "'s turn";
                        console.log("p 2 turn: ", player2Name);

                        if (p1WinningMoves()) {
                            turnDisplayList[1].style.visibility = 'hidden';
                            turnDisplayList[1].textContent = player2Name + "'s turn";
                            // console.log('Player 1 wins.');
                            player1Name = document.getElementById('player1Name').value;
                            gameOver('Game Over!', `${player1Name} wins.`);
                        }

                        if (turnNumber === 9) {
                            turnDisplayList[1].style.visibility = 'hidden';
                            turnDisplayList[1].textContent = player2Name + "'s turn";
                            if (!p1WinningMoves()) {
                                console.log('Game draw!');
                                gameOver('Game Draw!', 'No one wins.');
                            }
                        }
                    }
                    else {
                        box.textContent = p2.sym;

                        turnDisplayList[1].style.visibility = 'hidden';
                        // turnDisplayList[1].textContent = player2Name + "'s turn";

                        turnDisplayList[0].style.visibility = 'visible';
                        // turnDisplayList[0].textContent = player1Name + "'s turn";

                        console.log(turnNumber);
                        if (p2WinningMoves()) {
                            turnDisplayList[0].style.visibility = 'hidden';
                            turnDisplayList[0].textContent = player1Name + "'s turn";
                            // console.log('Player 2 wins.');
                            player2Name = document.getElementById('player2Name').value;
                            gameOver('Game Over!', `${player2Name} wins.`);
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


playGame.addEventListener('click', () => {
    // gameboard();
    console.log(dialogPlayersNames);
    dialogPlayersNames.showModal();
    closeModal.addEventListener("click", () => {
        dialogPlayersNames.close();
    });
});

playNewGame.addEventListener('click', () => {

    // turnDisplayList[0].style.visibility = 'visible';
    // // console.log(turnDisplayList[0]);
    // // turnDisplayList[0].textContent = player1Name + "'s turn";
    // // turnDisplayList[1].style.visibility = 'hidden';
    // // turnDisplayList[1].textContent = player2Name + "'s turn";
    // newGame();
    // dialog.close();

    newGame();
    
    dialogPlayersNames.showModal();
    closeModal.addEventListener("click", () => {
        dialogPlayersNames.close();
    });
    dialog.close();

});



noMoreGames.addEventListener('click', () => {
    playGame.style.display = 'inline';
    desc.style.display = 'block';
    gameboardDisplay.style.display = 'none';
    turnDisplayList[0].style.visibility = 'hidden';
    turnDisplayList[1].style.visibility = 'hidden';
    document.getElementById('player1Name').value = 'Player 1';
    document.getElementById('player2Name').value = 'Player 2';
    newGame();
    dialog.close();
});


form.addEventListener('submit', function () {
    gameboard();
});








// gameboardSection

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