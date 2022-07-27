export { displayControl };

// Import all images with their filenames as keys using Webpack's require.context

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));

const displayControl = (() => {

  // Utility function to create divs with classes
  const div = function(...className) {
    const div = document.createElement('div');
    div.classList.add(...className);
    return div;
  }

  const _setGameMessage = function(text) {
    document.querySelector('.game-message').textContent = text;
  }

  // Set up skeleton of site, i.e header, footer, and main element
  const basicSetup = function() {
    const header = div('header');
    header.textContent = 'Battleship';
    
    const main = document.createElement('main');

    const footer = div('footer');
    footer.textContent = 'Created by Houndoom';
    
    const body = document.querySelector('body');
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
  }

  // Clear main element, for transitioning game states
  const clearMain = function() {
    const mainNode = document.querySelector('main').firstElementChild;
    if (mainNode) mainNode.remove();
  }

  // Start screen to ask for name
  const startSetup = function() {
    const start = div('start');
    
    // Name field
    const nameForm = div('name-form');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name-input');
    nameLabel.textContent = 'Please enter your player name:';

    const nameInput = document.createElement('input');
    nameInput.id = 'name-input';
    nameInput.maxLength = '12';
    nameInput.required = true;

    nameForm.appendChild(nameLabel);
    nameForm.appendChild(nameInput);

    // Submit button
    const enterButton = document.createElement('button');
    enterButton.textContent = 'Enter';

    start.appendChild(nameForm);
    start.appendChild(enterButton);

    document.querySelector('main').appendChild(start);
  }

  // Screen to place ships
  const placeShipSetup = function(ships) {
    const placeShip = div('place-ship');
    const gameMessage = div('game-message');
    gameMessage.textContent = 'Drag and drop your ships to place them on your board';
    const chooseShip = div('choose-ship');

    const toggleDir = document.createElement('button');
    toggleDir.textContent = 'Toggle Direction';

    // Allow players to toggle ships horizontally/vertically to place them
    toggleDir.addEventListener('click', toggleDirection);

    function toggleDirection() {
      const allShips = document.querySelectorAll('img[draggable=true]'); // Don't toggle those that are already placed (non-draggable)
      allShips.forEach(s => {
        const shipDir = s.getAttribute('data-dir');
        const newShipDir = (shipDir === 'h') ? 'v' : 'h';
        const shipLen = parseInt(s.getAttribute('data-len'));
        s.src = images[`ship${shipLen}${newShipDir}.svg`]; // Replace image with toggled direction
        s.setAttribute('data-dir', newShipDir);
      })
    }

    chooseShip.appendChild(toggleDir);
    
    // Place all ship images
    for (let i = 0; i < ships.length; i++) {
      const ship = document.createElement('img');
      ship.src = images[`ship${ships[i]}h.svg`];
      ship.id = `ship${i}`;
      ship.setAttribute('data-len', ships[i]);
      ship.setAttribute('data-dir', 'h');
      ship.draggable = true;
      chooseShip.appendChild(ship);
    }

    placeShip.appendChild(gameMessage);
    placeShip.appendChild(chooseShip);
    placeShip.appendChild(_createGameboard(10));

    document.querySelector('main').appendChild(placeShip);
  }

  // Check whether all ships have been placed
  const allShipsPlaced = function() {
    return document.querySelectorAll('img[data-len]:not(.hide)').length === 0;
  }

  // Screen for actual game
  const gameSetup = function(len, leftName, rightName) {
    const game = div('game');

    const gameMessage = div('game-message');
    gameMessage.textContent = 'Start attacking!'; // Initial game message

    const gameDisplay = div('game-display');

    const playerSpaceLeft = div('player-space', 'left');
    const midsection = div('midsection');
    const playerSpaceRight = div('player-space', 'right');

    const playerNameLeft = div('player-name');
    playerNameLeft.textContent = leftName;
    playerSpaceLeft.appendChild(playerNameLeft);
    playerSpaceLeft.appendChild(_createGameboard(len));

    const playerNameRight = div('player-name');
    playerNameRight.textContent = rightName;
    playerSpaceRight.appendChild(playerNameRight);
    playerSpaceRight.appendChild(_createGameboard(len));

    gameDisplay.appendChild(playerSpaceLeft);
    gameDisplay.appendChild(midsection);
    gameDisplay.appendChild(playerSpaceRight);

    game.appendChild(gameMessage);
    game.appendChild(gameDisplay);

    document.querySelector('main').appendChild(game);

  }

  // Create DOM gameboard
  const _createGameboard = function(len) {
    const root = document.documentElement;
    root.style.setProperty('--board-length', len);

    const newGameboard = div('gameboard');

    for (let i = 0; i < len * len; i++) {
      const square = div('square');
      square.setAttribute('data-id', `s${i}`);
      const x = i % len;
      const y = (i - x) / len;
      square.setAttribute('data-x', `x${x}`);
      square.setAttribute('data-y', `y${y}`);
      square.style.gridColumn = `${x + 1} / span 1`; // Fix grid positions so that ship images can be overlapped with squares
      square.style.gridRow = `${y + 1} / span 1`;
      newGameboard.appendChild(square);
    }

    return newGameboard;
  }

  // Insert ship image onto gameboard. Images overlap with squares as they all have gridColumn and gridRow specified
  const insertShip = function(gameboardSelector, x, y, len, dir) {
    const img = document.createElement('img');
    img.src = images[`ship${len}${dir}.svg`];
    if (dir === 'h') {
      img.style.gridColumn = `${x + 1} / span ${len}`;
      img.style.gridRow = `${y + 1}`;
    } else {
      img.style.gridColumn = `${x + 1}`;
      img.style.gridRow = `${y + 1} / span ${len}`;  
    }
    img.style.zIndex = '-1'; // Set ship images to be behind board
    document.querySelector(gameboardSelector).appendChild(img);
  }

  // Add relevant classes to attacked squares and set game message accordingly
  const attack = function(playerName, boardSelector, i, hit = false, sunk = false) {
    const board = document.querySelector(boardSelector);
    const square = board.querySelector(`[data-id = 's${i}']`)
    square.classList.add('attacked');
    if (hit) {
      square.classList.add('hit');
      if (sunk) _setGameMessage(`${playerName} sinks a ship!`);
      else _setGameMessage(`${playerName} hits a ship!`);
    } else  _setGameMessage(`${playerName} misses!`);
  }

  // Toggle whether board has event listeners
  const toggleBoard = function(boardSelector, func, disable = false) {
    const board = document.querySelector(boardSelector);
    const squares = board.querySelectorAll('.square');

    if (!disable) squares.forEach(e => {
      e.addEventListener('click', func)
      e.classList.add('active-board'); // Add hover effect if event listeners are active
    });
    else squares.forEach(e => { // Remove event listeners if disable = true
      e.removeEventListener('click', func);
      e.classList.remove('active-board')
    });
  }

  // Add play again button and set appropriate message when someone wins
  const win = function(playerName) {
    _setGameMessage(`${playerName} wins!`);

    const restart = document.createElement('button');
    restart.textContent = 'Play Again';
    document.querySelector('.midsection').append(restart);
  }

  return { basicSetup, startSetup, placeShipSetup, gameSetup, attack, toggleBoard, win, clearMain, insertShip, allShipsPlaced };

})();