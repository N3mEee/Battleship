import Ship from "./Ship";
export default class Gameboard {
    constructor(size) {
        this.size = size;
        this.board = this.createBoard(size);
        this.ships = [];
    }

    createBoard() {
        const board = [];
        for (let i = 0; i < this.size; i++) {
            board[i] = [];
            for (let j = 0; j < this.size; j++) {
                board[i][j] = 0;
            }
        }
        return board;
    }

    addShip(size, start, end) {
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                this.board[i][j] = 1;
            }
        }
        this.ships.push(new Ship(size, start, end));
    }

    receiveAttack(row, col) {
        if (this.board[row][col] === 1) {
            this.board[row][col] = 2;
            for (let ship of this.ships) {
                if (ship.coversCoordinate(row, col)) {
                    ship.hit();
                    break;
                }
            }
            return true;
        } else {
            return false;
        }
    }

    allSunk() {
        return this.ships.every((ship) => ship.isSunk());
    }
}
