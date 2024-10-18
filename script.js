const cellsArray = document.querySelectorAll('.cell');
const desc = document.querySelector('.desc');
const gameboardDisplay = document.querySelector('.gameboard');
const gameboardSection = document.querySelector('.gameboardSection');
const dialog = document.querySelector("dialog");
const dialogPlayersNames = document.querySelector("#dialogPlayersNames");
const gameStatus = document.querySelector("dialog h2");
const gameWinner = document.querySelector("dialog p");
const playGame = document.querySelector('#playGame');
const playNewGame = document.querySelector('#playNewGame');
const noMoreGames = document.querySelector('#nomoregames');
const error = document.querySelector('.error');
const form = document.getElementById('myForm');
const turnDisplay = document.querySelectorAll('.turnDisplay');
const turnDisplayList = Array.from(turnDisplay);

let turnNumber = 0;
error.style.display = 'none';
gameboardDisplay.style.display = 'none';
turnDisplayList[0].style.visibility = 'hidden';
turnDisplayList[0].textContent = player1Name + "'s turn";
turnDisplayList[1].style.visibility = 'hidden';
turnDisplayList[1].textContent = player2Name + "'s turn";

function gameboard() {

    let player1Name = document.getElementById('player1Name').value;
    let player2Name = document.getElementById('player2Name').value;

    turnDisplayList[0].style.visibility = 'visible';
    turnDisplayList[0].textContent = player1Name + "'s turn";

    turnDisplayList[1].style.visibility = 'hidden';
    turnDisplayList[1].textContent = player2Name + "'s turn";

    playGame.style.display = 'none';
    desc.style.display = 'none';
    gameboardDisplay.style.display = 'flex';
    cellsArray.forEach((box) => {
        box.removeEventListener('click', handleBoxClick);
        box.addEventListener('click', handleBoxClick);
    })
}


function handleBoxClick(event) {
    const box = event.target;
    if (box.textContent === '') {
        turnNumber++;
        if (turnNumber === 1 | turnNumber === 3 | turnNumber === 5 | turnNumber === 7 | turnNumber === 9) {
            error.style.display = 'none';
            box.textContent = p1.sym;
            turnDisplayList[0].style.visibility = 'hidden';
            player2Name = document.getElementById('player2Name').value;
            turnDisplayList[1].style.visibility = 'visible';
            turnDisplayList[1].textContent = player2Name + "'s turn";

            if (p1WinningMoves()) {
                turnDisplayList[1].style.visibility = 'hidden';
                turnDisplayList[1].textContent = player2Name + "'s turn";
                player1Name = document.getElementById('player1Name').value;
                gameOver('Game Over!', `${player1Name} wins.`);
            }

            if (turnNumber === 9) {
                turnDisplayList[1].style.visibility = 'hidden';
                turnDisplayList[1].textContent = player2Name + "'s turn";
                if (!p1WinningMoves()) {
                    gameOver('Game Draw!', 'No one wins.');
                }
            }
        }
        else {
            error.style.display = 'none';
            box.textContent = p2.sym;
            turnDisplayList[1].style.visibility = 'hidden';
            turnDisplayList[0].style.visibility = 'visible';
            if (p2WinningMoves()) {
                turnDisplayList[0].style.visibility = 'hidden';
                turnDisplayList[0].textContent = player1Name + "'s turn";
                player2Name = document.getElementById('player2Name').value;
                gameOver('Game Over!', `${player2Name} wins.`);
            }
        }
    }
    else if (box.textContent === 'X' | box.textContent === 'O') {
        error.style.display = 'block';
    }
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
    cellsArray.forEach((box) => {
        box.textContent = '';
    });
    turnNumber = 0;
}


function gameOver(status, winner) {
    gameStatus.textContent = status;
    gameWinner.textContent = winner;
    dialog.showModal();
}


function noMoreGamesHandler() {
    playGame.style.display = 'inline';
    desc.style.display = 'block';
    gameboardDisplay.style.display = 'none';
    turnDisplayList[0].style.visibility = 'hidden';
    turnDisplayList[1].style.visibility = 'hidden';
    document.getElementById('player1Name').value = 'Player 1';
    document.getElementById('player2Name').value = 'Player 2';
    newGame();
    dialog.close();
}


function createPlayer(name, sym) {
    return { name, sym };
}

let p1 = createPlayer('kiran', 'X');
let p2 = createPlayer('abdur', 'O');


playGame.addEventListener('click', () => {
    dialogPlayersNames.showModal();
});


playNewGame.addEventListener('click', () => {
    dialogPlayersNames.showModal();
    dialog.close();
});


form.addEventListener('submit', function () {
    newGame();
    gameboard();
});

noMoreGames.addEventListener('click', noMoreGamesHandler);

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