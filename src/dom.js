import "./style.css";

const main = document.querySelector("main");

function createBoard(board, container, isPlayer) {
    const boardElement = document.createElement("div");
    boardElement.classList.add("board");
    if (!isPlayer) boardElement.classList.add("ai-board");
    container.appendChild(boardElement);

    board.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.dataset.row = rowIndex;
            cellElement.dataset.col = cellIndex;

            if (isPlayer) {
                if (cell === 1) cellElement.classList.add("ship");
                else if (cell === 2) cellElement.classList.add("damaged-ship");
                else if (cell === 3) cellElement.classList.add("missed-attack");
            } else {
                if (cell === 2) cellElement.classList.add("damaged-ship");
                else if (cell === 3) cellElement.classList.add("missed-attack");
            }

            boardElement.appendChild(cellElement);
        });
    });
}

function drawBoard(board1, board2) {
    main.innerHTML = "";

    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
    main.appendChild(boardContainer);

    createBoard(board1, boardContainer, true);
    createBoard(board2, boardContainer, false);
}

function showWinner(winner) {
    main.innerHTML = `<h1>${winner} wins!</h1>`;

    const restartButton = document.createElement("button");
    restartButton.classList.add("restart-button");
    restartButton.textContent = "Restart";
    main.appendChild(restartButton);
}

function lobby() {
    main.innerHTML = "";

    const startGameButton = document.createElement("button");
    startGameButton.classList.add("start-game-button");
    startGameButton.textContent = "Start Game";
    main.appendChild(startGameButton);
}

export { drawBoard, showWinner, lobby };
