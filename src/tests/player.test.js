import Player from "../Player";

test("player type", () => {
    const player = new Player("Player");
    expect(player.type).toBe("Player");
});

test("player attack", () => {
    const player1 = new Player("Player");
    const player2 = new Player("Player");

    player1.attackEnemy(player2, 0, 0);
    expect(player2.gameboard.missedAttacks).toStrictEqual([[0, 0]]);
});

test("player addship", () => {
    const player1 = new Player("Player");
    const player2 = new Player("Player");

    player1.gameboard.addShip(4, [0, 0], [0, 4]);
    player2.gameboard.addShip(4, [0, 0], [0, 4]);
    player1.attackEnemy(player2, 0, 0);
    player2.attackEnemy(player1, 0, 0);

    expect(player2.gameboard.ships[0].hits).toBe(1);
});

test("player turn", () => {
    const player1 = new Player("Player");
    const player2 = new Player("Player");

    player1.attackEnemy(player2, 0, 0);
    player2.attackEnemy(player1, 0, 0);

    expect(player1.turn).toBe(true);
    expect(player2.turn).toBe(false);
});

test("player turn", () => {
    const player1 = new Player("Player");
    const player2 = new Player("Player");

    player1.attackEnemy(player2, 0, 0);

    expect(player1.turn).toBe(false);
    expect(player2.turn).toBe(true);
});
