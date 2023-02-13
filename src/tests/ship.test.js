import Ship from "../Ship";

test("ship hit", () => {
    const ship = new Ship(2, [0, 0], [0, 1]);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test("ship sunk", () => {
    const ship = new Ship(2, [0, 0], [0, 1]);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
