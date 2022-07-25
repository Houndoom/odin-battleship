import { Gameboard } from './Gameboard.js';

let gameboard;

describe('Placing ships', () => {
  beforeEach(() => {
    gameboard = Gameboard(10);
  })
  
  test('Place ship', () => {
    expect(gameboard.placeShip(3, 1, 3, 'h')).toBe(true);
  })
  
  test('Place ship Out of Bounds', () => {
    expect(gameboard.placeShip(8, 1, 3, 'h')).toBe(false);
  })
  
  test('Place overlapping ship', () => {
    gameboard.placeShip(1, 3, 3, 'v');
    expect(gameboard.placeShip(1, 1, 3, 'v')).toBe(false);
  })
})

describe('Hitting ships', () => {
  beforeEach(() => {
    gameboard = Gameboard(10);
    gameboard.placeShip(3, 1, 5, 'h');
  })

  test('Miss ship', () => {
    expect(gameboard.receiveAttack(3, 3)).toBe(-1);
  })

  test('Hit first ship', () => {
    expect(gameboard.receiveAttack(5, 1)).toBe(0);
  })

  test('Hit existing spot', () => {
    gameboard.receiveAttack(5, 1);
    expect(gameboard.receiveAttack(5, 1)).toBe(-2);
  })

  test('Not all ships sunk', () => {
    gameboard.receiveAttack(5, 1);
    expect(gameboard.allSunk()).toBe(false);
  })

  test('All ships sunk', () => {
    gameboard.receiveAttack(3, 1);
    gameboard.receiveAttack(4, 1);
    gameboard.receiveAttack(5, 1);
    gameboard.receiveAttack(6, 1);
    gameboard.receiveAttack(7, 1);
    expect(gameboard.allSunk()).toBe(true);
  })
})