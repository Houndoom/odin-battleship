import { Player } from './Player.js';
import { Gameboard } from './Gameboard.js';

let gameboard;
let player;

beforeEach(() => {
  gameboard = Gameboard(10);
  gameboard.placeShip(3, 1, 5, 'v');
  player = Player('Player 1');
})

test('Name', () => {
  expect(player.getName()).toBe('Player 1');
})

test('Attack unhit empty spot', () => {
  expect(player.attack(gameboard, 3, 0)).toBe(-1);
})

test('Attack already hit spot', () => {
  player.attack(gameboard, 3, 0);
  expect(player.attack(gameboard, 3, 0)).toBe(-2)
})

test('Random attack', () => {
  expect(player.randomAttack(gameboard)).toBeGreaterThan(-2);
})