import Player from "./Player";
import { drawBoard, showWinner, lobby } from "./dom";

initLobby();

function initLobby() {
    lobby();
    document.querySelector(".start-game-button").addEventListener("click", startGame);
}

function startGame() {
    const player1 = new Player("Player");
    const player2 = new Player("AI");

    addShip(player1, 5);
    addShip(player2, 5);

    drawBoard(player1.gameboard.board, player2.gameboard.board);

    addEnemyBoardEvent(player1, player2);
}

function addShip(player, size) {
    const [shipRow, shipCol] = prompt(`Ship size: ${size}`).split("");
    player.gameboard.addShip(size, [Number(shipRow), Number(shipCol)], [Number(shipRow), Number(shipCol) + size - 1]);
}

function addEnemyBoardEvent(player1, player2) {
    const enemyBoard = document.querySelector(".ai-board");
    enemyBoard.addEventListener("click", (e) => {
        handleAiBoardClick(e, player1, player2);
    });
}

function handleAiBoardClick(e, player1, player2) {
    if (player1.turn === true) {
        const { row, col } = e.target.dataset;
        player1.attackEnemy(player2, row, col);
        drawBoard(player1.gameboard.board, player2.gameboard.board);
        checkWinner(player1, player2);
        player2.attackEnemy(player1, 0, 0);
        drawBoard(player1.gameboard.board, player2.gameboard.board);
        checkWinner(player1, player2);
    }
}

function checkWinner(player1, player2) {
    if (player1.gameboard.allSunk() === true) {
        showWinner("Player2");
        addRestartEvent();
    } else if (player2.gameboard.allSunk() === true) {
        showWinner("Player1");
        addRestartEvent();
    } else {
        addEnemyBoardEvent(player1, player2);
    }
}

function addRestartEvent() {
    document.querySelector(".restart-button").addEventListener("click", () => {
        initLobby();
    });
}
