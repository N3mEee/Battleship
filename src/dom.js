import "./style.css";

const main = document.querySelector("main");
function drawBoard(board1, board2) {
    main.innerHTML = "";

    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
    main.appendChild(boardContainer);

    const boardPlayer1 = document.createElement("div");
    boardPlayer1.classList.add("board");
    boardContainer.appendChild(boardPlayer1);

    for (let i = 0; i < board1.length; i++) {
        for (let j = 0; j < board1[i].length; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = `${i}`;
            cell.dataset.col = `${j}`;

            boardPlayer1.appendChild(cell);
            if (board1[i][j] === 1) {
                cell.classList.add("ship");
            } else if (board1[i][j] === 2) {
                cell.classList.add("damaged-ship");
            } else if (board1[i][j] === 3) {
                cell.classList.add("missed-attack");
            }
        }
    }

    const boardPlayer2 = document.createElement("div");
    boardPlayer2.classList.add("board");
    boardPlayer2.classList.add("ai-board");
    boardContainer.appendChild(boardPlayer2);

    for (let i = 0; i < board2.length; i++) {
        for (let j = 0; j < board2[i].length; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = `${i}`;
            cell.dataset.col = `${j}`;

            boardPlayer2.appendChild(cell);
            if (board2[i][j] === 2) {
                cell.classList.add("damaged-ship");
            } else if (board2[i][j] === 3) {
                cell.classList.add("missed-attack");
            }
        }
    }
}
function showWinner(winner) {
    main.innerHTML = `<h1>${winner} wins!</h1>`;
    const restartButton = document.createElement("button");
    restartButton.classList.add("restart-button");
    restartButton.innerHTML = "Restart";
    main.appendChild(restartButton);
}

function lobby() {
    main.innerHTML = "";
    const startGameButton = document.createElement("button");
    startGameButton.textContent = "Start Game";
    startGameButton.classList.add("start-game-button");
    main.appendChild(startGameButton);
}
export { drawBoard, showWinner, lobby };
