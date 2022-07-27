import { displayControl } from './displayControl.js';
import { Player } from './Player.js';
import { Gameboard } from './Gameboard.js'

export { gameControl };

const gameControl = (() => {

  let gameboards;
  const gameboardSelectors = ['.left .gameboard', '.right .gameboard'] // For left and right gameboards
  let players;
  const boardLen = 10; // Length of gameboards
  const shipLengths = [2, 2, 3, 3, 4, 5]; // Lengths of ships that can be placed on board
  let _currPlayer = 0; // 0 = left player, 1 = right player

  const createPlayers = function(name1, name2) {
    players = [Player(name1), Player(name2)];
  }

  // Utility function to insert all ship images to either the left or right gameboard
  const _insertAllShips = function(gameboard) {
    if (gameboard === 'left') gameboards[0].getShipPositions().forEach(params => displayControl.insertShip(gameboardSelectors[0],...params));
    else gameboards[1].getShipPositions().forEach(params => displayControl.insertShip(gameboardSelectors[1],...params));
  }

  // Current player attacks enemy board
  const _attack = function() {
    const id = this.getAttribute('data-id').substring(1);
    const enemyPlayer = (_currPlayer + 1) % 2;
    const x = id % boardLen;
    const y = (id - x) / boardLen;
    let attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    if (attackResult === -1) { // Valid attack that missed
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id);
    } else if (attackResult === 0) { // Valid attack that hit a ship (but did not sink it)
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true);
    } else if (typeof attackResult === 'object') { // Valid attack that sunk a ship
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true, true);
      displayControl.insertShip(gameboardSelectors[enemyPlayer],...attackResult);
    }
    // Check if all ships on enemy board are sunk. If so, trigger win
    if (gameboards[enemyPlayer].allSunk()) _win();
    else if (attackResult !== -2) _changeTurn(); // receiveAttack returns -2 if attack on square was invalid. If so, do nothing
  }

  // Current player randomly attacks the enemy board
  const _randomAttack = () => {
    const enemyPlayer = (_currPlayer + 1) % 2;
    let attackResult = -2;
    let x;
    let y;
    while (attackResult === -2) { // receiveAttack returns -2 if attack on square was invalid
      x = Math.floor(Math.random()*boardLen);
      y = Math.floor(Math.random()*boardLen);
      attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    }
    if (attackResult === -1) { // Valid attack that missed
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*boardLen + x);
    } else if (attackResult === 0) { // Valid attack that hit a ship (but did not sink it)
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*boardLen + x, true);
    } else if (typeof attackResult === 'object') { // Valid attack that sunk a ship
      displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*boardLen + x, true, true);
    }
    // Check if all ships on enemy board are sunk. If so, trigger win, otherwise change turn (attack ensured to be valid)
    if (gameboards[enemyPlayer].allSunk()) _win();
    else _changeTurn();
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
    displayControl.toggleBoard(gameboardSelectors[1], _attack, true); // Remove event selectors from board
    displayControl.win(players[_currPlayer].getName()); // Trigger win display
    document.querySelector('.midsection button').addEventListener("click", _placeShipSetup); // Add event listener to restart button to return to place ship window
  }

  // Do initial setup of the whole game
  const startSetup = function() {
    displayControl.clearMain();
    displayControl.startSetup();

    // Get name and start game
    document.querySelector('.start button').addEventListener('click', enter);

    // Make it work on Enter keyboard key also
    document.querySelector('.start input').addEventListener("keydown", e => {
      if (e.key === "Enter") enter();
    });

    // Do input validation. If OK, create Player with input value and move to place ship window
    function enter() {
      const nameInput = document.getElementById('name-input');
      if (nameInput.checkValidity()) {
        createPlayers(nameInput.value, 'Computer');
        _placeShipSetup();
      } else {
        nameInput.setCustomValidity('Please enter a name.');
        nameInput.reportValidity();
      }
    }
  }

  // Setup for place ship window
  const _placeShipSetup = function() {
    displayControl.clearMain();
    displayControl.placeShipSetup(shipLengths);
    gameboards = [Gameboard(boardLen), Gameboard(boardLen)]; // (Re-)initialize gameboards here

    // Set up drag and drop
    const squares = document.querySelectorAll('.square');

    squares.forEach(s => {
      s.addEventListener('dragenter', dragEnter);
      s.addEventListener('dragover', dragOver);
      s.addEventListener('dragleave', dragLeave);
      s.addEventListener('drop', drop);
    })

    const ships = document.querySelectorAll('img');
    ships.forEach(s => s.addEventListener('dragstart', dragStart));

    function dragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
    }

    function dragEnter(e) {
      e.preventDefault();
      e.target.classList.add('drag-over'); // Hover effect
    }

    function dragOver(e) {
      e.preventDefault();
      e.target.classList.add('drag-over');
    }

    function dragLeave(e) {
      e.target.classList.remove('drag-over');
    }

    function drop(e) {
      e.preventDefault();
      const x = parseInt(e.target.getAttribute('data-x').substring(1));
      const y = parseInt(e.target.getAttribute('data-y').substring(1));
      
      const id = e.dataTransfer.getData('text/plain');
      const draggable = document.getElementById(id);
      const shipLen = parseInt(draggable.getAttribute('data-len'));
      const dir = draggable.getAttribute('data-dir');
      
      e.target.classList.remove('drag-over');

      if (((dir === 'h') && (x <= boardLen - shipLen)) || ((dir === 'v') && (y <= boardLen - shipLen))) { // If start square isn't too large
        if (gameboards[0].placeShip(x, y, shipLen, dir)) { // If placeShip succeeds
          displayControl.insertShip('.gameboard', x, y, shipLen, dir); // Insert ship image accordingly
          draggable.classList.add('hide'); // Remove draggable ship from board
        }
      }

      if (displayControl.allShipsPlaced()) _startGame(); // Once all ships have been placed, start the game
    }
  }

  // Starts the game
  const _startGame = function() {
    displayControl.clearMain();
    displayControl.gameSetup(boardLen, players[0].getName(), players[1].getName());

    // Place computer ships randomly
    for (let shipLen of shipLengths) {
      gameboards[1].placeShipRandom(shipLen);
    }

    // Insert all ship images for player (left) gameboard
    _insertAllShips('left');
    turnSetup(); // Player has initial turn
  }
  
  return { startSetup };
})();