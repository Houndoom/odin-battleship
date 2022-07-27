import { displayControl } from './displayControl.js';
import { Player } from './Player.js';
import { Gameboard } from './Gameboard.js'

export { gameControl };

const gameControl = (() => {

  let gameboards;
  const gameboardSelectors = ['.left .gameboard', '.right .gameboard']
  let players;

  const createPlayers = function(name1, name2) {
    players = [Player(name1), Player(name2)];
  }

  const insertAllShips = function(gameboard) {
    if (gameboard === 'left') gameboards[0].getShipPositions().forEach(params => displayControl.insertShip(gameboardSelectors[0],...params));
    else gameboards[1].getShipPositions().forEach(params => displayControl.insertShip(gameboardSelectors[1],...params));
  }

  let _currPlayer = 0;

  const _randomAttack = () => {
    const enemyPlayer = (_currPlayer + 1) % 2;
    const len = gameboards[enemyPlayer].getLength();
    let attackResult = -2;
    let x;
    let y;
    while (attackResult === -2) {
      x = Math.floor(Math.random()*len);
      y = Math.floor(Math.random()*len);
      attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    }
    if (attackResult === -1) {
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*len + x);
    } else if (attackResult === 0) {
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*len + x, true);
    } else if (typeof attackResult === 'object') {
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*len + x, true, true);
    }
    if (gameboards[enemyPlayer].allSunk()) _win();
    else _changeTurn();
  }

  const _attack = function() {
    const id = this.getAttribute('data-id').substring(1);
    const enemyPlayer = (_currPlayer + 1) % 2;
    const len = gameboards[enemyPlayer].getLength();
    const x = id % len;
    const y = (id - x) / len;
    let attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    if (attackResult === -1) {
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id);
    } else if (attackResult === 0) {
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true);
    } else if (typeof attackResult === 'object') {
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true, true);
      displayControl.insertShip(gameboardSelectors[enemyPlayer],...attackResult);
    }
    if (gameboards[enemyPlayer].allSunk()) _win();
    else if (attackResult !== -2) _changeTurn();
  }

  // Does setup for player and computer turn
  const turnSetup = function() {
    if (_currPlayer === 0) displayControl.toggleBoard(gameboardSelectors[1], _attack); // Player turn: add attack click events
    else { // Computer turn: remove attack click events and computer randomly attacks after one second
      displayControl.toggleBoard(gameboardSelectors[1], _attack, true) 
      setTimeout(_randomAttack, 1000);
    }
  }

  const _changeTurn = function() {
    _currPlayer = (_currPlayer + 1) % 2;
    turnSetup();
  }

  const _win = function() {
    displayControl.toggleBoard(gameboardSelectors[1], _attack, true);
    displayControl.win(players[_currPlayer].getName());
    document.querySelector('.midsection button').addEventListener("click", _startGame);
  }

  const startSetup = function() {
    displayControl.clearMain();
    displayControl.startSetup();

    /* Get name and start game */

    document.querySelector('.start button').addEventListener('click', enter);

    // Make it work on Enter key
    document.querySelector('.start input').addEventListener("keydown", e => {
      if (e.key === "Enter") enter();
    });

    function enter() {
      const nameInput = document.getElementById('name-input');
      if (nameInput.checkValidity()) {
        createPlayers(nameInput.value, 'Computer');
        _startGame();
      } else {
        nameInput.setCustomValidity('Please enter a name.');
        nameInput.reportValidity();
      }
    }
  }

  const _startGame = function() {
    const boardLen = 10;
    displayControl.clearMain();
    gameboards = [Gameboard(boardLen), Gameboard(boardLen)];
    displayControl.gameSetup(boardLen, players[0].getName(), players[1].getName());

    for (let shipLen of [5, 4, 3, 2]) {
      gameboards[0].placeShipRandom(shipLen);
      gameboards[1].placeShipRandom(shipLen);
    }
    insertAllShips('left');
    turnSetup();
  }
  
  return { startSetup };
})();