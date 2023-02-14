import Gameboard from "../Gameboard";

test("gameBoard", () => {
    const board = new Gameboard(10);
    expect(board.createBoard()).toStrictEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
});

test("gameBoard add ship", () => {
    const board = new Gameboard(10);
    board.addShip(5, [0, 0], [0, 4]);
    expect(board.board).toStrictEqual([
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
});

test("gameBoard recive atack", () => {
    const board = new Gameboard(10);
    board.addShip(5, [0, 0], [0, 4]);
    expect(board.receiveAttack(0, 0)).toBe(true);
});

test("gameBoard recive atack", () => {
    const board = new Gameboard(10);
    board.addShip(5, [0, 0], [0, 4]);
    board.receiveAttack(0, 0);
    expect(board.board).toStrictEqual([
        [2, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
});

test("gameBoard recive atack2", () => {
    const board = new Gameboard(10);
    board.addShip(5, [0, 0], [0, 4]);
    expect(board.receiveAttack(2, 0)).toBe(false);
});

test("gameBoard all sunk", () => {
    const board = new Gameboard(10);
    board.addShip(5, [0, 0], [0, 4]);
    board.addShip(5, [1, 0], [1, 4]);
    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    board.receiveAttack(0, 2);
    board.receiveAttack(0, 3);
    board.receiveAttack(0, 4);
    board.receiveAttack(1, 0);
    board.receiveAttack(1, 1);
    board.receiveAttack(1, 2);
    board.receiveAttack(1, 3);
    // board.receiveAttack(1, 4);

    expect(board.allSunk()).toBe(false);
});

test("gameBoard all sunk", () => {
    const board = new Gameboard(10);
    board.addShip(5, [0, 0], [0, 4]);
    board.addShip(5, [1, 0], [1, 4]);
    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    board.receiveAttack(0, 2);
    board.receiveAttack(0, 3);
    board.receiveAttack(0, 4);
    board.receiveAttack(1, 0);
    board.receiveAttack(1, 1);
    board.receiveAttack(1, 2);
    board.receiveAttack(1, 3);
    board.receiveAttack(1, 4);

    expect(board.allSunk()).toBe(true);
});

test("missed attacks", () => {
    const board = new Gameboard(10);
    board.addShip(5, [0, 0], [0, 4]);
    board.addShip(5, [1, 0], [1, 4]);
    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    board.receiveAttack(0, 2);
    board.receiveAttack(0, 3);
    board.receiveAttack(0, 4);
    board.receiveAttack(2, 0);
    board.receiveAttack(2, 1);
    board.receiveAttack(2, 2);
    board.receiveAttack(2, 3);
    board.receiveAttack(2, 4);

    expect(board.missedAttacks).toStrictEqual([
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
    ]);
});
