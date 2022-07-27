export { displayControl };

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));

const displayControl = (() => {

  const div = function(...className) {
    const div = document.createElement('div');
    div.classList.add(...className);
    return div;
  }

  const _setGameMessage = function(text) {
    document.querySelector('.game-message').textContent = text;
  }

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

  const clearMain = function() {
    const mainNode = document.querySelector('main').firstElementChild;
    mainNode.remove();
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

  const gameSetup = function(len, leftName, rightName) {
    const game = div('game');

    const gameMessage = div('game-message');
    gameMessage.textContent = 'Start attacking!';

    const gameDisplay = div('game-display');

    const playerSpaceLeft = div('player-space', 'left');
    const turnDisplay = div('turn-display');
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
    gameDisplay.appendChild(turnDisplay);
    gameDisplay.appendChild(playerSpaceRight);

    game.appendChild(gameMessage);
    game.appendChild(gameDisplay);

    document.querySelector('main').appendChild(game);

  }

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
      square.style.gridColumn = `${x + 1} / span 1`;
      square.style.gridRow = `${y + 1} / span 1`;
      newGameboard.appendChild(square);
    }

    return newGameboard;
  }

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
    img.style.zIndex = '-1';
    document.querySelector(gameboardSelector).appendChild(img);
  }

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
      e.classList.add('active-board');
    });
    else squares.forEach(e => {
      e.removeEventListener('click', func);
      e.classList.remove('active-board')
    });
  }

  const win = function(playerName) {
    _setGameMessage(`${playerName} wins!`);
  }

  return { basicSetup, startSetup, gameSetup, attack, toggleBoard, win, clearMain, insertShip };

})();