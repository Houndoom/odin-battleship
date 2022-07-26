/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");



const Gameboard = (len) => {
  let _board = new Array(len);
  let _ships = [];
  const _boardSize = len*len; 

  for (let i = 0; i < len; i++) {
    _board[i] = new Array(len)
  }

  const getLength = () => len;
  
  const placeShipRandom = function(shipLen) {
    let x;
    let y;
    const directions = ['h', 'v'];
    let dir;
    let placed = false;

    while(placed === false) {
      dir = directions[Math.floor(Math.random() * 2)];
      if (dir === 'h') {
        x = Math.floor(Math.random() * (len - shipLen));
        y = Math.floor(Math.random() * len);
      } else {
        x = Math.floor(Math.random() * len);
        y = Math.floor(Math.random() * (len - shipLen));
      }
      placed = placeShip(x, y, shipLen, dir);
    }
  }

  const placeShip = function(x, y, shipLen, dir) {
    if (dir === 'h') {
      if (x <= len - shipLen) {
        for (let i = x; i < x + shipLen; i++) {
          if (_board[i][y] >= 0) return false;
        }
        _ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipLen));
        for (let i = x; i < x + shipLen; i++) {
          _board[i][y] = _ships.length - 1;
        }
        return true;
      }
    }
    if (dir === 'v') {
      if (y <= len - shipLen) {
        for (let i = y; i < y + shipLen; i++) {
          if (_board[x][i] >= 0) return false;
        }
        _ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipLen));
        for (let i = y; i < y + shipLen; i++) {
          _board[x][i] = _ships.length - 1;
        }
        return true;
      }
    }
    return false;
  }

  const receiveAttack = function(x, y) {
    // There cannot be a ship with number >= _boardSize, so can use numbers >= _boardSize to identify hit squares
    if (_board[x][y] === undefined) { // Unhit empty square
      _board[x][y] = _boardSize;
      return -1;
    } else if (_board[x][y] < _boardSize) { // Unhit ship square
      const shipNo = _board[x][y];
      _board[x][y] += _boardSize;
      return _ships[shipNo].hit(); // 0 if hit ship not sunk, 1 if ship sunk
    } else return -2; // Square already hit
  }

  const allSunk = function() {
    if (!_ships) return false;
    return _ships.reduce((a, b) => a && b.isSunk(), true);
  }

  return { placeShip, receiveAttack, allSunk, getLength, placeShipRandom };
}

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });


const Player = (name) => {
  const getName = () => name;

  const attack = (gameboard, x, y) => {
    return gameboard.receiveAttack(x, y);
  }

  const randomAttack = (gameboard) => {
    const boardLength = gameboard.getLength();
    let attackResult = -2;
    let x;
    let y;
    while (attackResult === -2) {
      x = Math.floor(Math.random()*boardLength);
      y = Math.floor(Math.random()*boardLength);
      attackResult = gameboard.receiveAttack(x, y);
    }
    return attackResult;
  }

  return { getName, attack, randomAttack};
}

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });


const Ship = (length) => {
  let _hitCount = 0;

  const getLength = () => length;

  const hit = () => {
    _hitCount++;
    if (isSunk()) return 1;
    else return 0;
  }
  
  const isSunk = () => {
    return _hitCount >= length;
  }

  return { getLength, hit, isSunk };
}

/***/ }),

/***/ "./src/displayControl.js":
/*!*******************************!*\
  !*** ./src/displayControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayControl": () => (/* binding */ displayControl)
/* harmony export */ });


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

  const gameSetup = function(len) {
    const game = div('game');

    const gameMessage = div('game-message');

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

  const attack = function(playerName, boardSelector, i, hit = false, sunk = false) {
    const board = document.querySelector(boardSelector);
    const square = board.querySelector(`[data-id = 'square${i}']`)
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
    });
    else squares.forEach(e => e.removeEventListener('click', func));
  }

  const win = function(playerName) {
    _setGameMessage(`${playerName} wins!`);
  }

  return { basicSetup , gameSetup, attack, toggleBoard, win };

})();

displayControl.gameSetup(10);


/***/ }),

/***/ "./src/gameControl.js":
/*!****************************!*\
  !*** ./src/gameControl.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameControl": () => (/* binding */ gameControl)
/* harmony export */ });
/* harmony import */ var _displayControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControl.js */ "./src/displayControl.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");






const gameControl = (() => {

  const gameboards = [(0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(10), (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(10)];
  const gameboardSelectors = ['.left .gameboard', '.right .gameboard']
  const players = [(0,_Player_js__WEBPACK_IMPORTED_MODULE_1__.Player)('Player 1'), (0,_Player_js__WEBPACK_IMPORTED_MODULE_1__.Player)('Computer')];

  gameboards[0].placeShipRandom(5);
  gameboards[0].placeShipRandom(4);
  gameboards[0].placeShipRandom(3);
  gameboards[0].placeShipRandom(2);

  gameboards[1].placeShipRandom(5);
  gameboards[1].placeShipRandom(4);
  gameboards[1].placeShipRandom(3);
  gameboards[1].placeShipRandom(2);

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
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*len + x);
    } else if (attackResult === 0) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*len + x, true);
    } else if (attackResult === 1) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*len + x, true, true);
    }
    if (gameboards[enemyPlayer].allSunk()) _win();
    else changeTurn();
  }

  const _attack = function() {
    const id = this.getAttribute('data-id').substring(6);
    const enemyPlayer = (_currPlayer + 1) % 2;
    const len = gameboards[enemyPlayer].getLength();
    const x = id % len;
    const y = (id - x) / len;
    let attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    if (attackResult === -1) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id);
    } else if (attackResult === 0) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true);
    } else if (attackResult === 1 ) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true, true);
    }
    if (gameboards[enemyPlayer].allSunk()) _win();
    else if (attackResult !== -2) changeTurn();
  }

  // Does setup for player and computer turn
  const turnSetup = function() {
    if (_currPlayer === 0) _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack); // Player turn: add attack click events
    else { // Computer turn: remove attack click events and computer randomly attacks after one second
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack, true) 
      setTimeout(_randomAttack, 1000);
    }
  }

  const changeTurn = function() {
    _currPlayer = (_currPlayer + 1) % 2;
    turnSetup();
  }

  const _win = function() {
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack, true);
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.win(players[_currPlayer].getName());
  }

  return { turnSetup };
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameControl.js */ "./src/gameControl.js");


_gameControl_js__WEBPACK_IMPORTED_MODULE_0__.gameControl.turnSetup();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsMEVBQTBCLGtDQUFrQztBQUN2RixXQUFXO0FBQ1gsTUFBTSwwRUFBMEI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwwRUFBMEI7QUFDOUIsSUFBSSxrRUFBa0I7QUFDdEI7O0FBRUEsV0FBVztBQUNYLENBQUM7Ozs7OztVQ3BGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTitDOztBQUUvQyxrRUFBcUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZGlzcGxheUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVDb250cm9sLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwLmpzJztcbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuXG5jb25zdCBHYW1lYm9hcmQgPSAobGVuKSA9PiB7XG4gIGxldCBfYm9hcmQgPSBuZXcgQXJyYXkobGVuKTtcbiAgbGV0IF9zaGlwcyA9IFtdO1xuICBjb25zdCBfYm9hcmRTaXplID0gbGVuKmxlbjsgXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIF9ib2FyZFtpXSA9IG5ldyBBcnJheShsZW4pXG4gIH1cblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW47XG4gIFxuICBjb25zdCBwbGFjZVNoaXBSYW5kb20gPSBmdW5jdGlvbihzaGlwTGVuKSB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFsnaCcsICd2J107XG4gICAgbGV0IGRpcjtcbiAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG5cbiAgICB3aGlsZShwbGFjZWQgPT09IGZhbHNlKSB7XG4gICAgICBkaXIgPSBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgICAgIGlmIChkaXIgPT09ICdoJykge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxlbiAtIHNoaXBMZW4pKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsZW4gLSBzaGlwTGVuKSk7XG4gICAgICB9XG4gICAgICBwbGFjZWQgPSBwbGFjZVNoaXAoeCwgeSwgc2hpcExlbiwgZGlyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbih4LCB5LCBzaGlwTGVuLCBkaXIpIHtcbiAgICBpZiAoZGlyID09PSAnaCcpIHtcbiAgICAgIGlmICh4IDw9IGxlbiAtIHNoaXBMZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKF9ib2FyZFtpXVt5XSA+PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3NoaXBzLnB1c2goU2hpcChzaGlwTGVuKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW47IGkrKykge1xuICAgICAgICAgIF9ib2FyZFtpXVt5XSA9IF9zaGlwcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlyID09PSAndicpIHtcbiAgICAgIGlmICh5IDw9IGxlbiAtIHNoaXBMZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKF9ib2FyZFt4XVtpXSA+PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3NoaXBzLnB1c2goU2hpcChzaGlwTGVuKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXBMZW47IGkrKykge1xuICAgICAgICAgIF9ib2FyZFt4XVtpXSA9IF9zaGlwcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIC8vIFRoZXJlIGNhbm5vdCBiZSBhIHNoaXAgd2l0aCBudW1iZXIgPj0gX2JvYXJkU2l6ZSwgc28gY2FuIHVzZSBudW1iZXJzID49IF9ib2FyZFNpemUgdG8gaWRlbnRpZnkgaGl0IHNxdWFyZXNcbiAgICBpZiAoX2JvYXJkW3hdW3ldID09PSB1bmRlZmluZWQpIHsgLy8gVW5oaXQgZW1wdHkgc3F1YXJlXG4gICAgICBfYm9hcmRbeF1beV0gPSBfYm9hcmRTaXplO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZiAoX2JvYXJkW3hdW3ldIDwgX2JvYXJkU2l6ZSkgeyAvLyBVbmhpdCBzaGlwIHNxdWFyZVxuICAgICAgY29uc3Qgc2hpcE5vID0gX2JvYXJkW3hdW3ldO1xuICAgICAgX2JvYXJkW3hdW3ldICs9IF9ib2FyZFNpemU7XG4gICAgICByZXR1cm4gX3NoaXBzW3NoaXBOb10uaGl0KCk7IC8vIDAgaWYgaGl0IHNoaXAgbm90IHN1bmssIDEgaWYgc2hpcCBzdW5rXG4gICAgfSBlbHNlIHJldHVybiAtMjsgLy8gU3F1YXJlIGFscmVhZHkgaGl0XG4gIH1cblxuICBjb25zdCBhbGxTdW5rID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFfc2hpcHMpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gX3NoaXBzLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiLmlzU3VuaygpLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiB7IHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgZ2V0TGVuZ3RoLCBwbGFjZVNoaXBSYW5kb20gfTtcbn0iLCJleHBvcnQgeyBQbGF5ZXIgfTtcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCwgeCwgeSkgPT4ge1xuICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZExlbmd0aCA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICBsZXQgYXR0YWNrUmVzdWx0ID0gLTI7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgd2hpbGUgKGF0dGFja1Jlc3VsdCA9PT0gLTIpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm9hcmRMZW5ndGgpO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib2FyZExlbmd0aCk7XG4gICAgICBhdHRhY2tSZXN1bHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB7IGdldE5hbWUsIGF0dGFjaywgcmFuZG9tQXR0YWNrfTtcbn0iLCJleHBvcnQgeyBTaGlwIH07XG5cbmNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBfaGl0Q291bnQgPSAwO1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgX2hpdENvdW50Kys7XG4gICAgaWYgKGlzU3VuaygpKSByZXR1cm4gMTtcbiAgICBlbHNlIHJldHVybiAwO1xuICB9XG4gIFxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9oaXRDb3VudCA+PSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4geyBnZXRMZW5ndGgsIGhpdCwgaXNTdW5rIH07XG59IiwiZXhwb3J0IHsgZGlzcGxheUNvbnRyb2wgfTtcblxuY29uc3QgZGlzcGxheUNvbnRyb2wgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGRpdiA9IGZ1bmN0aW9uKC4uLmNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGNvbnN0IF9zZXRHYW1lTWVzc2FnZSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1tZXNzYWdlJykudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9XG5cbiAgY29uc3QgYmFzaWNTZXR1cCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRpdignaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAnO1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkaXYoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IEhvdW5kb29tJztcbiAgICBcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfVxuXG4gIGNvbnN0IGdhbWVTZXR1cCA9IGZ1bmN0aW9uKGxlbikge1xuICAgIGNvbnN0IGdhbWUgPSBkaXYoJ2dhbWUnKTtcblxuICAgIGNvbnN0IGdhbWVNZXNzYWdlID0gZGl2KCdnYW1lLW1lc3NhZ2UnKTtcblxuICAgIGNvbnN0IGdhbWVEaXNwbGF5ID0gZGl2KCdnYW1lLWRpc3BsYXknKTtcblxuICAgIGNvbnN0IHBsYXllclNwYWNlTGVmdCA9IGRpdigncGxheWVyLXNwYWNlJywnbGVmdCcpO1xuICAgIGNvbnN0IHR1cm5EaXNwbGF5ID0gZGl2KCd0dXJuLWRpc3BsYXknKTtcbiAgICBjb25zdCBwbGF5ZXJTcGFjZVJpZ2h0ID0gZGl2KCdwbGF5ZXItc3BhY2UnLCAncmlnaHQnKTtcblxuICAgIFtwbGF5ZXJTcGFjZUxlZnQsIHBsYXllclNwYWNlUmlnaHRdLmZvckVhY2goZSA9PiB7XG4gICAgICBjb25zdCBwbGF5ZXJOYW1lID0gZGl2KCdwbGF5ZXItbmFtZScpO1xuICAgICAgZS5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcbiAgICAgIGUuYXBwZW5kQ2hpbGQoX2NyZWF0ZUdhbWVib2FyZChsZW4pKVxuICAgIH0pO1xuXG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQocGxheWVyU3BhY2VMZWZ0KTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZCh0dXJuRGlzcGxheSk7XG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQocGxheWVyU3BhY2VSaWdodCk7XG5cbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWVNZXNzYWdlKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWVEaXNwbGF5KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChnYW1lKTtcblxuICB9XG5cbiAgY29uc3QgX2NyZWF0ZUdhbWVib2FyZCA9IGZ1bmN0aW9uKGxlbikge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ib2FyZC1sZW5ndGgnLCBsZW4pO1xuXG4gICAgY29uc3QgbmV3R2FtZWJvYXJkID0gZGl2KCdnYW1lYm9hcmQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuICogbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRpdignc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYHNxdWFyZSR7aX1gKTtcbiAgICAgIG5ld0dhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdHYW1lYm9hcmQ7XG4gIH1cblxuICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBib2FyZFNlbGVjdG9yLCBpLCBoaXQgPSBmYWxzZSwgc3VuayA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkU2VsZWN0b3IpO1xuICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkID0gJ3NxdWFyZSR7aX0nXWApXG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgaWYgKHN1bmspIF9zZXRHYW1lTWVzc2FnZShgJHtwbGF5ZXJOYW1lfSBzaW5rcyBhIHNoaXAhYCk7XG4gICAgICBlbHNlIF9zZXRHYW1lTWVzc2FnZShgJHtwbGF5ZXJOYW1lfSBoaXRzIGEgc2hpcCFgKTtcbiAgICB9IGVsc2UgIF9zZXRHYW1lTWVzc2FnZShgJHtwbGF5ZXJOYW1lfSBtaXNzZXMhYCk7XG4gIH1cblxuICAvLyBUb2dnbGUgd2hldGhlciBib2FyZCBoYXMgZXZlbnQgbGlzdGVuZXJzXG4gIGNvbnN0IHRvZ2dsZUJvYXJkID0gZnVuY3Rpb24oYm9hcmRTZWxlY3RvciwgZnVuYywgZGlzYWJsZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkU2VsZWN0b3IpO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG5cbiAgICBpZiAoIWRpc2FibGUpIHNxdWFyZXMuZm9yRWFjaChlID0+IHtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKVxuICAgIH0pO1xuICAgIGVsc2Ugc3F1YXJlcy5mb3JFYWNoKGUgPT4gZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpKTtcbiAgfVxuXG4gIGNvbnN0IHdpbiA9IGZ1bmN0aW9uKHBsYXllck5hbWUpIHtcbiAgICBfc2V0R2FtZU1lc3NhZ2UoYCR7cGxheWVyTmFtZX0gd2lucyFgKTtcbiAgfVxuXG4gIHJldHVybiB7IGJhc2ljU2V0dXAgLCBnYW1lU2V0dXAsIGF0dGFjaywgdG9nZ2xlQm9hcmQsIHdpbiB9O1xuXG59KSgpO1xuXG5kaXNwbGF5Q29udHJvbC5nYW1lU2V0dXAoMTApO1xuIiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2wgfSBmcm9tICcuL2Rpc3BsYXlDb250cm9sLmpzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vR2FtZWJvYXJkLmpzJ1xuXG5leHBvcnQgeyBnYW1lQ29udHJvbCB9O1xuXG5jb25zdCBnYW1lQ29udHJvbCA9ICgoKSA9PiB7XG5cbiAgY29uc3QgZ2FtZWJvYXJkcyA9IFtHYW1lYm9hcmQoMTApLCBHYW1lYm9hcmQoMTApXTtcbiAgY29uc3QgZ2FtZWJvYXJkU2VsZWN0b3JzID0gWycubGVmdCAuZ2FtZWJvYXJkJywgJy5yaWdodCAuZ2FtZWJvYXJkJ11cbiAgY29uc3QgcGxheWVycyA9IFtQbGF5ZXIoJ1BsYXllciAxJyksIFBsYXllcignQ29tcHV0ZXInKV07XG5cbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXBSYW5kb20oNSk7XG4gIGdhbWVib2FyZHNbMF0ucGxhY2VTaGlwUmFuZG9tKDQpO1xuICBnYW1lYm9hcmRzWzBdLnBsYWNlU2hpcFJhbmRvbSgzKTtcbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXBSYW5kb20oMik7XG5cbiAgZ2FtZWJvYXJkc1sxXS5wbGFjZVNoaXBSYW5kb20oNSk7XG4gIGdhbWVib2FyZHNbMV0ucGxhY2VTaGlwUmFuZG9tKDQpO1xuICBnYW1lYm9hcmRzWzFdLnBsYWNlU2hpcFJhbmRvbSgzKTtcbiAgZ2FtZWJvYXJkc1sxXS5wbGFjZVNoaXBSYW5kb20oMik7XG5cbiAgbGV0IF9jdXJyUGxheWVyID0gMDtcblxuICBjb25zdCBfcmFuZG9tQXR0YWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGVuZW15UGxheWVyID0gKF9jdXJyUGxheWVyICsgMSkgJSAyO1xuICAgIGNvbnN0IGxlbiA9IGdhbWVib2FyZHNbZW5lbXlQbGF5ZXJdLmdldExlbmd0aCgpO1xuICAgIGxldCBhdHRhY2tSZXN1bHQgPSAtMjtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICB3aGlsZSAoYXR0YWNrUmVzdWx0ID09PSAtMikge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpsZW4pO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpsZW4pO1xuICAgICAgYXR0YWNrUmVzdWx0ID0gZ2FtZWJvYXJkc1tlbmVteVBsYXllcl0ucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gLTEpIHtcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCksIGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIHkqbGVuICsgeCk7XG4gICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09IDApIHtcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCksIGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIHkqbGVuICsgeCwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09IDEpIHtcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCksIGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIHkqbGVuICsgeCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5hbGxTdW5rKCkpIF93aW4oKTtcbiAgICBlbHNlIGNoYW5nZVR1cm4oKTtcbiAgfVxuXG4gIGNvbnN0IF9hdHRhY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykuc3Vic3RyaW5nKDYpO1xuICAgIGNvbnN0IGVuZW15UGxheWVyID0gKF9jdXJyUGxheWVyICsgMSkgJSAyO1xuICAgIGNvbnN0IGxlbiA9IGdhbWVib2FyZHNbZW5lbXlQbGF5ZXJdLmdldExlbmd0aCgpO1xuICAgIGNvbnN0IHggPSBpZCAlIGxlbjtcbiAgICBjb25zdCB5ID0gKGlkIC0geCkgLyBsZW47XG4gICAgbGV0IGF0dGFja1Jlc3VsdCA9IGdhbWVib2FyZHNbZW5lbXlQbGF5ZXJdLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gLTEpIHtcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCksIGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIGlkKTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gMCkge1xuICAgICAgZGlzcGxheUNvbnRyb2wuYXR0YWNrKHBsYXllcnNbX2N1cnJQbGF5ZXJdLmdldE5hbWUoKSwgZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgaWQsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAxICkge1xuICAgICAgZGlzcGxheUNvbnRyb2wuYXR0YWNrKHBsYXllcnNbX2N1cnJQbGF5ZXJdLmdldE5hbWUoKSwgZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgaWQsIHRydWUsIHRydWUpO1xuICAgIH1cbiAgICBpZiAoZ2FtZWJvYXJkc1tlbmVteVBsYXllcl0uYWxsU3VuaygpKSBfd2luKCk7XG4gICAgZWxzZSBpZiAoYXR0YWNrUmVzdWx0ICE9PSAtMikgY2hhbmdlVHVybigpO1xuICB9XG5cbiAgLy8gRG9lcyBzZXR1cCBmb3IgcGxheWVyIGFuZCBjb21wdXRlciB0dXJuXG4gIGNvbnN0IHR1cm5TZXR1cCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChfY3VyclBsYXllciA9PT0gMCkgZGlzcGxheUNvbnRyb2wudG9nZ2xlQm9hcmQoZ2FtZWJvYXJkU2VsZWN0b3JzWzFdLCBfYXR0YWNrKTsgLy8gUGxheWVyIHR1cm46IGFkZCBhdHRhY2sgY2xpY2sgZXZlbnRzXG4gICAgZWxzZSB7IC8vIENvbXB1dGVyIHR1cm46IHJlbW92ZSBhdHRhY2sgY2xpY2sgZXZlbnRzIGFuZCBjb21wdXRlciByYW5kb21seSBhdHRhY2tzIGFmdGVyIG9uZSBzZWNvbmRcbiAgICAgIGRpc3BsYXlDb250cm9sLnRvZ2dsZUJvYXJkKGdhbWVib2FyZFNlbGVjdG9yc1sxXSwgX2F0dGFjaywgdHJ1ZSkgXG4gICAgICBzZXRUaW1lb3V0KF9yYW5kb21BdHRhY2ssIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoYW5nZVR1cm4gPSBmdW5jdGlvbigpIHtcbiAgICBfY3VyclBsYXllciA9IChfY3VyclBsYXllciArIDEpICUgMjtcbiAgICB0dXJuU2V0dXAoKTtcbiAgfVxuXG4gIGNvbnN0IF93aW4gPSBmdW5jdGlvbigpIHtcbiAgICBkaXNwbGF5Q29udHJvbC50b2dnbGVCb2FyZChnYW1lYm9hcmRTZWxlY3RvcnNbMV0sIF9hdHRhY2ssIHRydWUpO1xuICAgIGRpc3BsYXlDb250cm9sLndpbihwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCkpO1xuICB9XG5cbiAgcmV0dXJuIHsgdHVyblNldHVwIH07XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2FtZUNvbnRyb2wgfSBmcm9tICcuL2dhbWVDb250cm9sLmpzJztcblxuZ2FtZUNvbnRyb2wudHVyblNldHVwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9