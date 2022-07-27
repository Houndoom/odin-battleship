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