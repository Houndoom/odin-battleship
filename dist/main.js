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
  
  const placeShip = function (x, y, shipLen, dir) {
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
      _ships[shipNo].hit();
      _board[x][y] += _boardSize;
      return shipNo;
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

  let currPlayer = 0;

  const _randomAttack = () => {
    const enemyPlayer = (currPlayer + 1) % 2;
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
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(gameboardSelectors[enemyPlayer], y*len + x);
    } else if (attackResult >= 0) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(gameboardSelectors[enemyPlayer], y*len + x, true);
    }
    changeTurn();
  }

  const _attack = function() {
    const id = this.getAttribute('data-id').substring(6);
    const enemyPlayer = (currPlayer + 1) % 2;
    const len = gameboards[enemyPlayer].getLength();
    const x = id % len;
    const y = (id - x) / len;
    let attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    if (attackResult === -1) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(gameboardSelectors[enemyPlayer], id);
    } else if (attackResult >= 0) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(gameboardSelectors[enemyPlayer], id, true);
    }
    if (attackResult !== -2) changeTurn();
  }

  const turnSetup = async function() {
    if (currPlayer === 0) _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack);
    else {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack, true)
      setTimeout(_randomAttack, 1000);
    }
  }

  const changeTurn = function() {
    currPlayer = (currPlayer + 1) % 2;
    console.log(currPlayer);
    turnSetup();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0Msa0VBQXFCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2Rpc3BsYXlDb250cm9sLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vU2hpcC5qcyc7XG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcblxuY29uc3QgR2FtZWJvYXJkID0gKGxlbikgPT4ge1xuICBsZXQgX2JvYXJkID0gbmV3IEFycmF5KGxlbik7XG4gIGxldCBfc2hpcHMgPSBbXTtcbiAgY29uc3QgX2JvYXJkU2l6ZSA9IGxlbipsZW47IFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBfYm9hcmRbaV0gPSBuZXcgQXJyYXkobGVuKVxuICB9XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuO1xuICBcbiAgY29uc3QgcGxhY2VTaGlwID0gZnVuY3Rpb24gKHgsIHksIHNoaXBMZW4sIGRpcikge1xuICAgIGlmIChkaXIgPT09ICdoJykge1xuICAgICAgaWYgKHggPD0gbGVuIC0gc2hpcExlbikge1xuICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwTGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoX2JvYXJkW2ldW3ldID49IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfc2hpcHMucHVzaChTaGlwKHNoaXBMZW4pKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgX2JvYXJkW2ldW3ldID0gX3NoaXBzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXIgPT09ICd2Jykge1xuICAgICAgaWYgKHkgPD0gbGVuIC0gc2hpcExlbikge1xuICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoX2JvYXJkW3hdW2ldID49IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfc2hpcHMucHVzaChTaGlwKHNoaXBMZW4pKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgX2JvYXJkW3hdW2ldID0gX3NoaXBzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgLy8gVGhlcmUgY2Fubm90IGJlIGEgc2hpcCB3aXRoIG51bWJlciA+PSBfYm9hcmRTaXplLCBzbyBjYW4gdXNlIG51bWJlcnMgPj0gX2JvYXJkU2l6ZSB0byBpZGVudGlmeSBoaXQgc3F1YXJlc1xuICAgIGlmIChfYm9hcmRbeF1beV0gPT09IHVuZGVmaW5lZCkgeyAvLyBVbmhpdCBlbXB0eSBzcXVhcmVcbiAgICAgIF9ib2FyZFt4XVt5XSA9IF9ib2FyZFNpemU7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChfYm9hcmRbeF1beV0gPCBfYm9hcmRTaXplKSB7IC8vIFVuaGl0IHNoaXAgc3F1YXJlXG4gICAgICBjb25zdCBzaGlwTm8gPSBfYm9hcmRbeF1beV07XG4gICAgICBfc2hpcHNbc2hpcE5vXS5oaXQoKTtcbiAgICAgIF9ib2FyZFt4XVt5XSArPSBfYm9hcmRTaXplO1xuICAgICAgcmV0dXJuIHNoaXBObztcbiAgICB9IGVsc2UgcmV0dXJuIC0yOyAvLyBTcXVhcmUgYWxyZWFkeSBoaXRcbiAgfVxuXG4gIGNvbnN0IGFsbFN1bmsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIV9zaGlwcykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBfc2hpcHMucmVkdWNlKChhLCBiKSA9PiBhICYmIGIuaXNTdW5rKCksIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLCBnZXRMZW5ndGggfTtcbn0iLCJleHBvcnQgeyBQbGF5ZXIgfTtcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCwgeCwgeSkgPT4ge1xuICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZExlbmd0aCA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICBsZXQgYXR0YWNrUmVzdWx0ID0gLTI7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgd2hpbGUgKGF0dGFja1Jlc3VsdCA9PT0gLTIpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm9hcmRMZW5ndGgpO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib2FyZExlbmd0aCk7XG4gICAgICBhdHRhY2tSZXN1bHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB7IGdldE5hbWUsIGF0dGFjaywgcmFuZG9tQXR0YWNrfTtcbn0iLCJleHBvcnQgeyBTaGlwIH07XG5cbmNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBfaGl0Q291bnQgPSAwO1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgX2hpdENvdW50Kys7XG4gIH1cbiAgXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gX2hpdENvdW50ID49IGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7IGdldExlbmd0aCwgaGl0LCBpc1N1bmsgfTtcbn0iLCJleHBvcnQgeyBkaXNwbGF5Q29udHJvbCB9O1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbCA9ICgoKSA9PiB7XG5cbiAgY29uc3QgZGl2ID0gZnVuY3Rpb24oLi4uY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgY29uc3QgYmFzaWNTZXR1cCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRpdignaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAnO1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkaXYoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IEhvdW5kb29tJztcbiAgICBcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfVxuXG4gIGNvbnN0IGdhbWVTZXR1cCA9IGZ1bmN0aW9uKGxlbikge1xuICAgIGNvbnN0IGdhbWUgPSBkaXYoJ2dhbWUnKTtcblxuICAgIGNvbnN0IGdhbWVNZXNzYWdlID0gZGl2KCdnYW1lLW1lc3NhZ2UnKTtcbiAgICBnYW1lTWVzc2FnZS50ZXh0Q29udGVudCA9ICdZb3UgaGl0IGEgc2hpcCEnIC8vXG5cbiAgICBjb25zdCBnYW1lRGlzcGxheSA9IGRpdignZ2FtZS1kaXNwbGF5Jyk7XG5cbiAgICBjb25zdCBwbGF5ZXJTcGFjZUxlZnQgPSBkaXYoJ3BsYXllci1zcGFjZScsJ2xlZnQnKTtcbiAgICBjb25zdCB0dXJuRGlzcGxheSA9IGRpdigndHVybi1kaXNwbGF5Jyk7XG4gICAgY29uc3QgcGxheWVyU3BhY2VSaWdodCA9IGRpdigncGxheWVyLXNwYWNlJywgJ3JpZ2h0Jyk7XG5cbiAgICBbcGxheWVyU3BhY2VMZWZ0LCBwbGF5ZXJTcGFjZVJpZ2h0XS5mb3JFYWNoKGUgPT4ge1xuICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGRpdigncGxheWVyLW5hbWUnKTtcbiAgICAgIGUuYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XG4gICAgICBlLmFwcGVuZENoaWxkKF9jcmVhdGVHYW1lYm9hcmQobGVuKSlcbiAgICB9KTtcblxuICAgIGdhbWVEaXNwbGF5LmFwcGVuZENoaWxkKHBsYXllclNwYWNlTGVmdCk7XG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQodHVybkRpc3BsYXkpO1xuICAgIGdhbWVEaXNwbGF5LmFwcGVuZENoaWxkKHBsYXllclNwYWNlUmlnaHQpO1xuXG4gICAgZ2FtZS5hcHBlbmRDaGlsZChnYW1lTWVzc2FnZSk7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChnYW1lRGlzcGxheSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoZ2FtZSk7XG5cbiAgfVxuXG4gIGNvbnN0IF9jcmVhdGVHYW1lYm9hcmQgPSBmdW5jdGlvbihsZW4pIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tYm9hcmQtbGVuZ3RoJywgbGVuKTtcblxuICAgIGNvbnN0IG5ld0dhbWVib2FyZCA9IGRpdignZ2FtZWJvYXJkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAqIGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkaXYoJ3NxdWFyZScpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGBzcXVhcmUke2l9YCk7XG4gICAgICBuZXdHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3R2FtZWJvYXJkO1xuICB9XG5cbiAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24oYm9hcmRTZWxlY3RvciwgaSwgaGl0ID0gZmFsc2UpIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm9hcmRTZWxlY3Rvcik7XG4gICAgY29uc3Qgc3F1YXJlID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQgPSAnc3F1YXJlJHtpfSddYClcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gVG9nZ2xlIHdoZXRoZXIgYm9hcmQgaGFzIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCB0b2dnbGVCb2FyZCA9IGZ1bmN0aW9uKGJvYXJkU2VsZWN0b3IsIGZ1bmMsIGRpc2FibGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2FyZFNlbGVjdG9yKTtcbiAgICBjb25zdCBzcXVhcmVzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuXG4gICAgaWYgKCFkaXNhYmxlKSBzcXVhcmVzLmZvckVhY2goZSA9PiB7XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYylcbiAgICB9KTtcbiAgICBlbHNlIHNxdWFyZXMuZm9yRWFjaChlID0+IGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKSk7XG4gIH1cblxuICByZXR1cm4geyBiYXNpY1NldHVwICwgZ2FtZVNldHVwLCBhdHRhY2ssIHRvZ2dsZUJvYXJkIH07XG5cbn0pKCk7XG5cbmRpc3BsYXlDb250cm9sLmdhbWVTZXR1cCgxMCk7XG4iLCJpbXBvcnQgeyBkaXNwbGF5Q29udHJvbCB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2wuanMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9HYW1lYm9hcmQuanMnXG5cbmV4cG9ydCB7IGdhbWVDb250cm9sIH07XG5cbmNvbnN0IGdhbWVDb250cm9sID0gKCgpID0+IHtcblxuICBjb25zdCBnYW1lYm9hcmRzID0gW0dhbWVib2FyZCgxMCksIEdhbWVib2FyZCgxMCldO1xuICBjb25zdCBnYW1lYm9hcmRTZWxlY3RvcnMgPSBbJy5sZWZ0IC5nYW1lYm9hcmQnLCAnLnJpZ2h0IC5nYW1lYm9hcmQnXVxuICBjb25zdCBwbGF5ZXJzID0gW1BsYXllcignUGxheWVyIDEnKSwgUGxheWVyKCdDb21wdXRlcicpXTtcblxuICBnYW1lYm9hcmRzWzBdLnBsYWNlU2hpcCgzLCAxLCA1LCAndicpO1xuICBnYW1lYm9hcmRzWzBdLnBsYWNlU2hpcCgxLCAwLCAzLCAnaCcpO1xuICBnYW1lYm9hcmRzWzBdLnBsYWNlU2hpcCgwLCA1LCAyLCAnaCcpO1xuICBnYW1lYm9hcmRzWzBdLnBsYWNlU2hpcCg2LCA2LCA0LCAnaCcpO1xuXG4gIGdhbWVib2FyZHNbMV0ucGxhY2VTaGlwKDMsIDMsIDUsICd2Jyk7XG4gIGdhbWVib2FyZHNbMV0ucGxhY2VTaGlwKDEsIDEsIDMsICdoJyk7XG4gIGdhbWVib2FyZHNbMV0ucGxhY2VTaGlwKDAsIDcsIDIsICdoJyk7XG4gIGdhbWVib2FyZHNbMV0ucGxhY2VTaGlwKDYsIDYsIDQsICd2Jyk7XG5cbiAgbGV0IGN1cnJQbGF5ZXIgPSAwO1xuXG4gIGNvbnN0IF9yYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5lbXlQbGF5ZXIgPSAoY3VyclBsYXllciArIDEpICUgMjtcbiAgICBjb25zdCBsZW4gPSBnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5nZXRMZW5ndGgoKTtcbiAgICBsZXQgYXR0YWNrUmVzdWx0ID0gLTI7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgd2hpbGUgKGF0dGFja1Jlc3VsdCA9PT0gLTIpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbGVuKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbGVuKTtcbiAgICAgIGF0dGFja1Jlc3VsdCA9IGdhbWVib2FyZHNbZW5lbXlQbGF5ZXJdLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IC0xKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2soZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgeSpsZW4gKyB4KTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA+PSAwKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2soZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgeSpsZW4gKyB4LCB0cnVlKTtcbiAgICB9XG4gICAgY2hhbmdlVHVybigpO1xuICB9XG5cbiAgY29uc3QgX2F0dGFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKS5zdWJzdHJpbmcoNik7XG4gICAgY29uc3QgZW5lbXlQbGF5ZXIgPSAoY3VyclBsYXllciArIDEpICUgMjtcbiAgICBjb25zdCBsZW4gPSBnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5nZXRMZW5ndGgoKTtcbiAgICBjb25zdCB4ID0gaWQgJSBsZW47XG4gICAgY29uc3QgeSA9IChpZCAtIHgpIC8gbGVuO1xuICAgIGxldCBhdHRhY2tSZXN1bHQgPSBnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IC0xKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2soZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgaWQpO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID49IDApIHtcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLCBpZCwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChhdHRhY2tSZXN1bHQgIT09IC0yKSBjaGFuZ2VUdXJuKCk7XG4gIH1cblxuICBjb25zdCB0dXJuU2V0dXAgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBpZiAoY3VyclBsYXllciA9PT0gMCkgZGlzcGxheUNvbnRyb2wudG9nZ2xlQm9hcmQoZ2FtZWJvYXJkU2VsZWN0b3JzWzFdLCBfYXR0YWNrKTtcbiAgICBlbHNlIHtcbiAgICAgIGRpc3BsYXlDb250cm9sLnRvZ2dsZUJvYXJkKGdhbWVib2FyZFNlbGVjdG9yc1sxXSwgX2F0dGFjaywgdHJ1ZSlcbiAgICAgIHNldFRpbWVvdXQoX3JhbmRvbUF0dGFjaywgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hhbmdlVHVybiA9IGZ1bmN0aW9uKCkge1xuICAgIGN1cnJQbGF5ZXIgPSAoY3VyclBsYXllciArIDEpICUgMjtcbiAgICBjb25zb2xlLmxvZyhjdXJyUGxheWVyKTtcbiAgICB0dXJuU2V0dXAoKTtcbiAgfVxuXG4gIHJldHVybiB7IHR1cm5TZXR1cCB9O1xufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdhbWVDb250cm9sIH0gZnJvbSAnLi9nYW1lQ29udHJvbC5qcyc7XG5cbmdhbWVDb250cm9sLnR1cm5TZXR1cCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==