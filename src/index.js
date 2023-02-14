import Player from "./Player";

const player1 = new Player("Player");
const player2 = new Player("AI");

player1.gameboard.addShip(10, [0, 0], [0, 9]);
player1.gameboard.addShip(10, [5, 0], [5, 9]);
player1.gameboard.addShip(2, [7, 5], [8, 5]);

player2.gameboard.addShip(10, [0, 0], [0, 9]);

player1.attackEnemy(player2, 0, 0);
player1.attackEnemy(player2, 2, 0);
player1.attackEnemy(player2, 2, 0);

for (let i = 0; i < 200; i++) {
    player2.attackEnemy(player1, 0, 0);
}

console.log(player1.gameboard);
console.log(hasDuplicates(player1.gameboard.missedAttacks));

console.log(player2.gameboard);
console.log(hasDuplicates(player2.gameboard.missedAttacks));

function hasDuplicates(arr) {
    const newArr = [];
    for (const element of arr) {
        newArr.push(element.join(""));
    }
    const noDups = new Set(newArr);
    return arr.length !== noDups.size;
}
