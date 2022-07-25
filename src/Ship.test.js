import { Ship } from './Ship.js';

let battleship;

beforeEach(() => {
  battleship = Ship(3,'h');
})

test('getLength', () => {
  expect(battleship.getLength()).toBe(3);
})

test('Hit once, not sunk', () => {
  battleship.hit();
  expect(battleship.isSunk()).toBe(false);
})

test('Hit and sunk', () => {
  for (let i = 0; i < battleship.getLength(); i++) {
    battleship.hit();
  }
  expect(battleship.isSunk()).toBe(true);
})