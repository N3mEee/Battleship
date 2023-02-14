import Gameboard from "./Gameboard";

export default class Player {
    constructor(type) {
        this.type = type;
        this.gameboard = new Gameboard(10);
    }

    attackEnemy(enemy, row, col) {
        if (this.type === "AI") {
            const [randomRow, randomCol] = this.#randomPositionGenerator(enemy);
            enemy.gameboard.receiveAttack(randomRow, randomCol);
        } else {
            enemy.gameboard.receiveAttack(row, col);
        }
    }

    //FIX THIS
    #randomPositionGenerator(enemy) {
        const randomRow = Math.floor(Math.random() * 10);
        const randomCol = Math.floor(Math.random() * 10);
        if (!enemy.gameboard.missedAttacks.includes([randomRow, randomCol])) {
            return [randomRow, randomCol];
        }
        return this.#randomPositionGenerator(enemy);
    }
}
