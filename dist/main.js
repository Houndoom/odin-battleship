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

  return { placeShip, receiveAttack, allSunk, getLength };
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

  gameboards[0].placeShip(3, 1, 5, 'v');
  gameboards[0].placeShip(1, 0, 3, 'h');
  gameboards[0].placeShip(0, 5, 2, 'h');
  gameboards[0].placeShip(6, 6, 4, 'h');

  gameboards[1].placeShip(3, 3, 5, 'v');
  gameboards[1].placeShip(1, 1, 3, 'h');
  gameboards[1].placeShip(0, 7, 2, 'h');
  gameboards[1].placeShip(6, 6, 4, 'v');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBFQUEwQjtBQUM5QixJQUFJLGtFQUFrQjtBQUN0Qjs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7O1VDcEZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DLGtFQUFxQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5Q29udHJvbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAuanMnO1xuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG5cbmNvbnN0IEdhbWVib2FyZCA9IChsZW4pID0+IHtcbiAgbGV0IF9ib2FyZCA9IG5ldyBBcnJheShsZW4pO1xuICBsZXQgX3NoaXBzID0gW107XG4gIGNvbnN0IF9ib2FyZFNpemUgPSBsZW4qbGVuOyBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgX2JvYXJkW2ldID0gbmV3IEFycmF5KGxlbilcbiAgfVxuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbjtcbiAgXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uKHgsIHksIHNoaXBMZW4sIGRpcikge1xuICAgIGlmIChkaXIgPT09ICdoJykge1xuICAgICAgaWYgKHggPD0gbGVuIC0gc2hpcExlbikge1xuICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwTGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoX2JvYXJkW2ldW3ldID49IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfc2hpcHMucHVzaChTaGlwKHNoaXBMZW4pKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgX2JvYXJkW2ldW3ldID0gX3NoaXBzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXIgPT09ICd2Jykge1xuICAgICAgaWYgKHkgPD0gbGVuIC0gc2hpcExlbikge1xuICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoX2JvYXJkW3hdW2ldID49IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfc2hpcHMucHVzaChTaGlwKHNoaXBMZW4pKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgX2JvYXJkW3hdW2ldID0gX3NoaXBzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgLy8gVGhlcmUgY2Fubm90IGJlIGEgc2hpcCB3aXRoIG51bWJlciA+PSBfYm9hcmRTaXplLCBzbyBjYW4gdXNlIG51bWJlcnMgPj0gX2JvYXJkU2l6ZSB0byBpZGVudGlmeSBoaXQgc3F1YXJlc1xuICAgIGlmIChfYm9hcmRbeF1beV0gPT09IHVuZGVmaW5lZCkgeyAvLyBVbmhpdCBlbXB0eSBzcXVhcmVcbiAgICAgIF9ib2FyZFt4XVt5XSA9IF9ib2FyZFNpemU7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChfYm9hcmRbeF1beV0gPCBfYm9hcmRTaXplKSB7IC8vIFVuaGl0IHNoaXAgc3F1YXJlXG4gICAgICBjb25zdCBzaGlwTm8gPSBfYm9hcmRbeF1beV07XG4gICAgICBfYm9hcmRbeF1beV0gKz0gX2JvYXJkU2l6ZTtcbiAgICAgIHJldHVybiBfc2hpcHNbc2hpcE5vXS5oaXQoKTsgLy8gMCBpZiBoaXQgc2hpcCBub3Qgc3VuaywgMSBpZiBzaGlwIHN1bmtcbiAgICB9IGVsc2UgcmV0dXJuIC0yOyAvLyBTcXVhcmUgYWxyZWFkeSBoaXRcbiAgfVxuXG4gIGNvbnN0IGFsbFN1bmsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIV9zaGlwcykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBfc2hpcHMucmVkdWNlKChhLCBiKSA9PiBhICYmIGIuaXNTdW5rKCksIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLCBnZXRMZW5ndGggfTtcbn0iLCJleHBvcnQgeyBQbGF5ZXIgfTtcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCwgeCwgeSkgPT4ge1xuICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZExlbmd0aCA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICBsZXQgYXR0YWNrUmVzdWx0ID0gLTI7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgd2hpbGUgKGF0dGFja1Jlc3VsdCA9PT0gLTIpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm9hcmRMZW5ndGgpO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib2FyZExlbmd0aCk7XG4gICAgICBhdHRhY2tSZXN1bHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB7IGdldE5hbWUsIGF0dGFjaywgcmFuZG9tQXR0YWNrfTtcbn0iLCJleHBvcnQgeyBTaGlwIH07XG5cbmNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBfaGl0Q291bnQgPSAwO1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgX2hpdENvdW50Kys7XG4gICAgaWYgKGlzU3VuaygpKSByZXR1cm4gMTtcbiAgICBlbHNlIHJldHVybiAwO1xuICB9XG4gIFxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9oaXRDb3VudCA+PSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4geyBnZXRMZW5ndGgsIGhpdCwgaXNTdW5rIH07XG59IiwiZXhwb3J0IHsgZGlzcGxheUNvbnRyb2wgfTtcblxuY29uc3QgZGlzcGxheUNvbnRyb2wgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGRpdiA9IGZ1bmN0aW9uKC4uLmNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGNvbnN0IF9zZXRHYW1lTWVzc2FnZSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1tZXNzYWdlJykudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9XG5cbiAgY29uc3QgYmFzaWNTZXR1cCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRpdignaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAnO1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkaXYoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IEhvdW5kb29tJztcbiAgICBcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfVxuXG4gIGNvbnN0IGdhbWVTZXR1cCA9IGZ1bmN0aW9uKGxlbikge1xuICAgIGNvbnN0IGdhbWUgPSBkaXYoJ2dhbWUnKTtcblxuICAgIGNvbnN0IGdhbWVNZXNzYWdlID0gZGl2KCdnYW1lLW1lc3NhZ2UnKTtcblxuICAgIGNvbnN0IGdhbWVEaXNwbGF5ID0gZGl2KCdnYW1lLWRpc3BsYXknKTtcblxuICAgIGNvbnN0IHBsYXllclNwYWNlTGVmdCA9IGRpdigncGxheWVyLXNwYWNlJywnbGVmdCcpO1xuICAgIGNvbnN0IHR1cm5EaXNwbGF5ID0gZGl2KCd0dXJuLWRpc3BsYXknKTtcbiAgICBjb25zdCBwbGF5ZXJTcGFjZVJpZ2h0ID0gZGl2KCdwbGF5ZXItc3BhY2UnLCAncmlnaHQnKTtcblxuICAgIFtwbGF5ZXJTcGFjZUxlZnQsIHBsYXllclNwYWNlUmlnaHRdLmZvckVhY2goZSA9PiB7XG4gICAgICBjb25zdCBwbGF5ZXJOYW1lID0gZGl2KCdwbGF5ZXItbmFtZScpO1xuICAgICAgZS5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcbiAgICAgIGUuYXBwZW5kQ2hpbGQoX2NyZWF0ZUdhbWVib2FyZChsZW4pKVxuICAgIH0pO1xuXG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQocGxheWVyU3BhY2VMZWZ0KTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZCh0dXJuRGlzcGxheSk7XG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQocGxheWVyU3BhY2VSaWdodCk7XG5cbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWVNZXNzYWdlKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKGdhbWVEaXNwbGF5KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChnYW1lKTtcblxuICB9XG5cbiAgY29uc3QgX2NyZWF0ZUdhbWVib2FyZCA9IGZ1bmN0aW9uKGxlbikge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ib2FyZC1sZW5ndGgnLCBsZW4pO1xuXG4gICAgY29uc3QgbmV3R2FtZWJvYXJkID0gZGl2KCdnYW1lYm9hcmQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuICogbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRpdignc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYHNxdWFyZSR7aX1gKTtcbiAgICAgIG5ld0dhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdHYW1lYm9hcmQ7XG4gIH1cblxuICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBib2FyZFNlbGVjdG9yLCBpLCBoaXQgPSBmYWxzZSwgc3VuayA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkU2VsZWN0b3IpO1xuICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkID0gJ3NxdWFyZSR7aX0nXWApXG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgaWYgKHN1bmspIF9zZXRHYW1lTWVzc2FnZShgJHtwbGF5ZXJOYW1lfSBzaW5rcyBhIHNoaXAhYCk7XG4gICAgICBlbHNlIF9zZXRHYW1lTWVzc2FnZShgJHtwbGF5ZXJOYW1lfSBoaXRzIGEgc2hpcCFgKTtcbiAgICB9IGVsc2UgIF9zZXRHYW1lTWVzc2FnZShgJHtwbGF5ZXJOYW1lfSBtaXNzZXMhYCk7XG4gIH1cblxuICAvLyBUb2dnbGUgd2hldGhlciBib2FyZCBoYXMgZXZlbnQgbGlzdGVuZXJzXG4gIGNvbnN0IHRvZ2dsZUJvYXJkID0gZnVuY3Rpb24oYm9hcmRTZWxlY3RvciwgZnVuYywgZGlzYWJsZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkU2VsZWN0b3IpO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG5cbiAgICBpZiAoIWRpc2FibGUpIHNxdWFyZXMuZm9yRWFjaChlID0+IHtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKVxuICAgIH0pO1xuICAgIGVsc2Ugc3F1YXJlcy5mb3JFYWNoKGUgPT4gZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpKTtcbiAgfVxuXG4gIGNvbnN0IHdpbiA9IGZ1bmN0aW9uKHBsYXllck5hbWUpIHtcbiAgICBfc2V0R2FtZU1lc3NhZ2UoYCR7cGxheWVyTmFtZX0gd2lucyFgKTtcbiAgfVxuXG4gIHJldHVybiB7IGJhc2ljU2V0dXAgLCBnYW1lU2V0dXAsIGF0dGFjaywgdG9nZ2xlQm9hcmQsIHdpbiB9O1xuXG59KSgpO1xuXG5kaXNwbGF5Q29udHJvbC5nYW1lU2V0dXAoMTApO1xuIiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2wgfSBmcm9tICcuL2Rpc3BsYXlDb250cm9sLmpzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vR2FtZWJvYXJkLmpzJ1xuXG5leHBvcnQgeyBnYW1lQ29udHJvbCB9O1xuXG5jb25zdCBnYW1lQ29udHJvbCA9ICgoKSA9PiB7XG5cbiAgY29uc3QgZ2FtZWJvYXJkcyA9IFtHYW1lYm9hcmQoMTApLCBHYW1lYm9hcmQoMTApXTtcbiAgY29uc3QgZ2FtZWJvYXJkU2VsZWN0b3JzID0gWycubGVmdCAuZ2FtZWJvYXJkJywgJy5yaWdodCAuZ2FtZWJvYXJkJ11cbiAgY29uc3QgcGxheWVycyA9IFtQbGF5ZXIoJ1BsYXllciAxJyksIFBsYXllcignQ29tcHV0ZXInKV07XG5cbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXAoMywgMSwgNSwgJ3YnKTtcbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXAoMSwgMCwgMywgJ2gnKTtcbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXAoMCwgNSwgMiwgJ2gnKTtcbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXAoNiwgNiwgNCwgJ2gnKTtcblxuICBnYW1lYm9hcmRzWzFdLnBsYWNlU2hpcCgzLCAzLCA1LCAndicpO1xuICBnYW1lYm9hcmRzWzFdLnBsYWNlU2hpcCgxLCAxLCAzLCAnaCcpO1xuICBnYW1lYm9hcmRzWzFdLnBsYWNlU2hpcCgwLCA3LCAyLCAnaCcpO1xuICBnYW1lYm9hcmRzWzFdLnBsYWNlU2hpcCg2LCA2LCA0LCAndicpO1xuXG4gIGxldCBfY3VyclBsYXllciA9IDA7XG5cbiAgY29uc3QgX3JhbmRvbUF0dGFjayA9ICgpID0+IHtcbiAgICBjb25zdCBlbmVteVBsYXllciA9IChfY3VyclBsYXllciArIDEpICUgMjtcbiAgICBjb25zdCBsZW4gPSBnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5nZXRMZW5ndGgoKTtcbiAgICBsZXQgYXR0YWNrUmVzdWx0ID0gLTI7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgd2hpbGUgKGF0dGFja1Jlc3VsdCA9PT0gLTIpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbGVuKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbGVuKTtcbiAgICAgIGF0dGFja1Jlc3VsdCA9IGdhbWVib2FyZHNbZW5lbXlQbGF5ZXJdLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IC0xKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2socGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpLCBnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLCB5KmxlbiArIHgpO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAwKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2socGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpLCBnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLCB5KmxlbiArIHgsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAxKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2socGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpLCBnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLCB5KmxlbiArIHgsIHRydWUsIHRydWUpO1xuICAgIH1cbiAgICBpZiAoZ2FtZWJvYXJkc1tlbmVteVBsYXllcl0uYWxsU3VuaygpKSBfd2luKCk7XG4gICAgZWxzZSBjaGFuZ2VUdXJuKCk7XG4gIH1cblxuICBjb25zdCBfYXR0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLnN1YnN0cmluZyg2KTtcbiAgICBjb25zdCBlbmVteVBsYXllciA9IChfY3VyclBsYXllciArIDEpICUgMjtcbiAgICBjb25zdCBsZW4gPSBnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5nZXRMZW5ndGgoKTtcbiAgICBjb25zdCB4ID0gaWQgJSBsZW47XG4gICAgY29uc3QgeSA9IChpZCAtIHgpIC8gbGVuO1xuICAgIGxldCBhdHRhY2tSZXN1bHQgPSBnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IC0xKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2socGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpLCBnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLCBpZCk7XG4gICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09IDApIHtcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCksIGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIGlkLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gMSApIHtcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCksIGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIGlkLCB0cnVlLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKGdhbWVib2FyZHNbZW5lbXlQbGF5ZXJdLmFsbFN1bmsoKSkgX3dpbigpO1xuICAgIGVsc2UgaWYgKGF0dGFja1Jlc3VsdCAhPT0gLTIpIGNoYW5nZVR1cm4oKTtcbiAgfVxuXG4gIC8vIERvZXMgc2V0dXAgZm9yIHBsYXllciBhbmQgY29tcHV0ZXIgdHVyblxuICBjb25zdCB0dXJuU2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoX2N1cnJQbGF5ZXIgPT09IDApIGRpc3BsYXlDb250cm9sLnRvZ2dsZUJvYXJkKGdhbWVib2FyZFNlbGVjdG9yc1sxXSwgX2F0dGFjayk7IC8vIFBsYXllciB0dXJuOiBhZGQgYXR0YWNrIGNsaWNrIGV2ZW50c1xuICAgIGVsc2UgeyAvLyBDb21wdXRlciB0dXJuOiByZW1vdmUgYXR0YWNrIGNsaWNrIGV2ZW50cyBhbmQgY29tcHV0ZXIgcmFuZG9tbHkgYXR0YWNrcyBhZnRlciBvbmUgc2Vjb25kXG4gICAgICBkaXNwbGF5Q29udHJvbC50b2dnbGVCb2FyZChnYW1lYm9hcmRTZWxlY3RvcnNbMV0sIF9hdHRhY2ssIHRydWUpIFxuICAgICAgc2V0VGltZW91dChfcmFuZG9tQXR0YWNrLCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGFuZ2VUdXJuID0gZnVuY3Rpb24oKSB7XG4gICAgX2N1cnJQbGF5ZXIgPSAoX2N1cnJQbGF5ZXIgKyAxKSAlIDI7XG4gICAgdHVyblNldHVwKCk7XG4gIH1cblxuICBjb25zdCBfd2luID0gZnVuY3Rpb24oKSB7XG4gICAgZGlzcGxheUNvbnRyb2wudG9nZ2xlQm9hcmQoZ2FtZWJvYXJkU2VsZWN0b3JzWzFdLCBfYXR0YWNrLCB0cnVlKTtcbiAgICBkaXNwbGF5Q29udHJvbC53aW4ocGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpKTtcbiAgfVxuXG4gIHJldHVybiB7IHR1cm5TZXR1cCB9O1xufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdhbWVDb250cm9sIH0gZnJvbSAnLi9nYW1lQ29udHJvbC5qcyc7XG5cbmdhbWVDb250cm9sLnR1cm5TZXR1cCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==