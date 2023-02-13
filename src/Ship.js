export default class Ship {
    constructor(length, start, end) {
        this.length = length;
        this.hits = 0;
        [this.startRow, this.startCol] = start;
        [this.endRow, this.endCol] = end;
    }

    coversCoordinate(row, col) {
        return row >= this.startRow && row <= this.endRow && col >= this.startCol && col <= this.endCol;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        return this.hits === this.length;
    }
}
