import "./style.css";

export default function drawBoard(board1, board2) {
    const main = document.querySelector("main");

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
            cell.innerHTML = board1[i][j];
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
    boardContainer.appendChild(boardPlayer2);

    for (let i = 0; i < board2.length; i++) {
        for (let j = 0; j < board2[i].length; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerHTML = board2[i][j];
            cell.dataset.row = `${i}`;
            cell.dataset.col = `${j}`;

            boardPlayer2.appendChild(cell);
            if (board2[i][j] === 1) {
                cell.classList.add("ship");
            } else if (board2[i][j] === 2) {
                cell.classList.add("damaged-ship");
            } else if (board2[i][j] === 3) {
                cell.classList.add("missed-attack");
            }
        }
    }
}
