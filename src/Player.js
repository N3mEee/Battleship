import Gameboard from "./Gameboard";

export default class Player {
    constructor(type) {
        this.type = type;
        this.gameboard = new Gameboard(10);
        if (type === "AI") {
            this.turn = false;
        } else {
            this.turn = true;
        }
    }

    attackEnemy(enemy, row, col) {
        if (this.turn) {
            if (this.type === "AI") {
                const [randomRow, randomCol] = this.#randomPositionGenerator(enemy);
                enemy.gameboard.receiveAttack(randomRow, randomCol);
                this.turn = false;
                enemy.turn = true;
            } else {
                if (enemy.gameboard.receiveAttack(row, col) === true) {
                    this.turn = false;
                    enemy.turn = true;
                }
            }
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
