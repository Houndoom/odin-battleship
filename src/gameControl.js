import { displayControl } from './displayControl.js';
import { Player } from './Player.js';
import { Gameboard } from './Gameboard.js'

export { gameControl };

const gameControl = (() => {

  const gameboards = [Gameboard(10), Gameboard(10)];
  const gameboardSelectors = ['.left .gameboard', '.right .gameboard']
  const players = [Player('Player 1'), Player('Computer')];

  gameboards[0].placeShip(3, 1, 5, 'v');
  gameboards[0].placeShip(1, 0, 3, 'h');
  gameboards[0].placeShip(0, 5, 2, 'h');
  gameboards[0].placeShip(6, 6, 4, 'h');

  gameboards[1].placeShip(3, 3, 5, 'v');
  gameboards[1].placeShip(1, 1, 3, 'h');
  gameboards[1].placeShip(0, 7, 2, 'h');
  gameboards[1].placeShip(6, 6, 4, 'v');

  let currPlayer = 0;

  const _attack = function() {
    const id = this.getAttribute('data-id').substring(6);
    const enemyPlayer = (currPlayer + 1) % 2;
    const len = gameboards[enemyPlayer].getLength();
    const x = id % len;
    const y = (id - x) / len;
    let attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    if (attackResult == -1) {
      displayControl.attack(gameboardSelectors[enemyPlayer], id);
    } else if (attackResult >= 0) {
      displayControl.attack(gameboardSelectors[enemyPlayer], id, true);
    }
  }

  const testfunc = function() {
    displayControl.toggleBoard(gameboardSelectors[1], _attack);
  }

  const changeTurn = function() {
    if (currPlayer === 0) displayControl.toggleBoard(gameboardSelectors[1], _attack, true);
    else displayControl.toggleBoard(gameboardSelectors[1], _attack);
    currPlayer = (currPlayer + 1) % 2;
  }

  return { testfunc };
})();