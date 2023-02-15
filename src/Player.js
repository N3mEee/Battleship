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

    #randomPositionGenerator(enemy) {
        let randomRow = Math.floor(Math.random() * 10);
        let randomCol = Math.floor(Math.random() * 10);

        while (enemy.gameboard.isPositionAvailable(randomRow, randomCol) === false) {
            randomRow = Math.floor(Math.random() * 10);
            randomCol = Math.floor(Math.random() * 10);
        }
        return [randomRow, randomCol];
    }
}
