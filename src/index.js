import Player from "./Player";
import drawBoard from "./dom";

const player1 = new Player("Player");
const player2 = new Player("AI");

drawBoard(player1.gameboard.board, player2.gameboard.board);

const boardContainer = document.querySelector(".board-container");
boardContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell")) {
        if (!e.target.classList.contains("ship")) {
            player1.gameboard.addShip(
                4,
                [+e.target.dataset.row, +e.target.dataset.col],
                [+e.target.dataset.row, +e.target.dataset.col + 3]
            );
            drawBoard(player1.gameboard.board, player2.gameboard.board);
        } else {
            console.log(e.target.classList.contains("ship"));
        }
    }
});
