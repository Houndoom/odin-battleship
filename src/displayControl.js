export { displayControl };

const displayControl = (() => {

  const div = function(...className) {
    const div = document.createElement('div');
    div.classList.add(...className);
    return div;
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

  const gameSetup = function(len) {
    const game = div('game');

    const gameMessage = div('game-message');
    gameMessage.textContent = 'You hit a ship!' //

    const gameDisplay = div('game-display');

    const playerSpaceLeft = div('player-space','left');
    const turnDisplay = div('turn-display');
    const playerSpaceRight = div('player-space', 'right');

    [playerSpaceLeft, playerSpaceRight].forEach(e => {
      const playerName = div('player-name');
      e.appendChild(playerName);
      e.appendChild(_createGameboard(len))
    });

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
      square.setAttribute('data-id', `square${i}`);
      newGameboard.appendChild(square);
    }

    return newGameboard;
  }

  const attack = function(boardSelector, i, hit = false) {
    const board = document.querySelector(boardSelector);
    const square = board.querySelector(`[data-id = 'square${i}']`)
    square.classList.add('attacked');
    if (hit) {
      square.classList.add('hit');
    }
  }

  // Toggle whether board has event listeners
  const toggleBoard = function(boardSelector, func, disable = false) {
    const board = document.querySelector(boardSelector);
    const squares = board.querySelectorAll('.square');

    if (!disable) squares.forEach(e => {
      e.addEventListener('click', func)
    });
    else squares.forEach(e => e.removeEventListener('click', func));
  }

  return { basicSetup , gameSetup, attack, toggleBoard };

})();

displayControl.gameSetup(10);
