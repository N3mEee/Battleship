import Player from "./Player";
import { drawBoard, showWinner } from "./dom";

function startGame() {
    const player1 = new Player("Player");
    const player2 = new Player("AI");
    const main = document.querySelector("main");

    player1.gameboard.addShip(5, [0, 0], [0, 0 + 4]);
    player1.gameboard.addShip(4, [5, 2], [5, 2 + 3]);
    player1.gameboard.addShip(3, [7, 5], [7 + 2, 5]);

    player2.gameboard.addShip(5, [1, 0], [1, 0 + 4]);
    player2.gameboard.addShip(4, [4, 2], [4, 2 + 3]);
    player2.gameboard.addShip(3, [5, 2], [5, 2 + 2]);

    drawBoard(player1.gameboard.board, player2.gameboard.board);

    main.addEventListener("click", (e) => {
        if (e.target.parentNode.classList.contains("ai-board")) {
            if (player1.turn === true) {
                player1.attackEnemy(player2, e.target.dataset.row, e.target.dataset.col);
                drawBoard(player1.gameboard.board, player2.gameboard.board);
                checkWinner();
                player2.attackEnemy(player1, 0, 0);
                drawBoard(player1.gameboard.board, player2.gameboard.board);
                checkWinner();
            }
        } else if (e.target.classList.contains("restart-button")) {
            startGame();
        }
    });

    const checkWinner = () => {
        if (player1.gameboard.allSunk() === true) {
            showWinner("Player1");
        } else if (player2.gameboard.allSunk() === true) {
            showWinner("Player2");
        }
    };
}

startGame();
