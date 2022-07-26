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

  const _attack = function() {
    const id = this.getAttribute('data-id').substring(6);
    const enemyPlayer = (currPlayer + 1) % 2;
    const len = gameboards[enemyPlayer].getLength();
    const x = id % len;
    const y = (id - x) / len;
    let attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    if (attackResult == -1) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(gameboardSelectors[enemyPlayer], id);
    } else if (attackResult >= 0) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(gameboardSelectors[enemyPlayer], id, true);
    }
  }

  const testfunc = function() {
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack);
  }

  const changeTurn = function() {
    if (currPlayer === 0) _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack, true);
    else _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack);
    currPlayer = (currPlayer + 1) % 2;
  }

  return { testfunc };
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


_gameControl_js__WEBPACK_IMPORTED_MODULE_0__.gameControl.testfunc();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5Q29udHJvbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAuanMnO1xuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG5cbmNvbnN0IEdhbWVib2FyZCA9IChsZW4pID0+IHtcbiAgbGV0IF9ib2FyZCA9IG5ldyBBcnJheShsZW4pO1xuICBsZXQgX3NoaXBzID0gW107XG4gIGNvbnN0IF9ib2FyZFNpemUgPSBsZW4qbGVuOyBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgX2JvYXJkW2ldID0gbmV3IEFycmF5KGxlbilcbiAgfVxuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbjtcbiAgXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uICh4LCB5LCBzaGlwTGVuLCBkaXIpIHtcbiAgICBpZiAoZGlyID09PSAnaCcpIHtcbiAgICAgIGlmICh4IDw9IGxlbiAtIHNoaXBMZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKF9ib2FyZFtpXVt5XSA+PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3NoaXBzLnB1c2goU2hpcChzaGlwTGVuKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW47IGkrKykge1xuICAgICAgICAgIF9ib2FyZFtpXVt5XSA9IF9zaGlwcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlyID09PSAndicpIHtcbiAgICAgIGlmICh5IDw9IGxlbiAtIHNoaXBMZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKF9ib2FyZFt4XVtpXSA+PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3NoaXBzLnB1c2goU2hpcChzaGlwTGVuKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXBMZW47IGkrKykge1xuICAgICAgICAgIF9ib2FyZFt4XVtpXSA9IF9zaGlwcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIC8vIFRoZXJlIGNhbm5vdCBiZSBhIHNoaXAgd2l0aCBudW1iZXIgPj0gX2JvYXJkU2l6ZSwgc28gY2FuIHVzZSBudW1iZXJzID49IF9ib2FyZFNpemUgdG8gaWRlbnRpZnkgaGl0IHNxdWFyZXNcbiAgICBpZiAoX2JvYXJkW3hdW3ldID09PSB1bmRlZmluZWQpIHsgLy8gVW5oaXQgZW1wdHkgc3F1YXJlXG4gICAgICBfYm9hcmRbeF1beV0gPSBfYm9hcmRTaXplO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZiAoX2JvYXJkW3hdW3ldIDwgX2JvYXJkU2l6ZSkgeyAvLyBVbmhpdCBzaGlwIHNxdWFyZVxuICAgICAgY29uc3Qgc2hpcE5vID0gX2JvYXJkW3hdW3ldO1xuICAgICAgX3NoaXBzW3NoaXBOb10uaGl0KCk7XG4gICAgICBfYm9hcmRbeF1beV0gKz0gX2JvYXJkU2l6ZTtcbiAgICAgIHJldHVybiBzaGlwTm87XG4gICAgfSBlbHNlIHJldHVybiAtMjsgLy8gU3F1YXJlIGFscmVhZHkgaGl0XG4gIH1cblxuICBjb25zdCBhbGxTdW5rID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFfc2hpcHMpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gX3NoaXBzLnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiLmlzU3VuaygpLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiB7IHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgZ2V0TGVuZ3RoIH07XG59IiwiZXhwb3J0IHsgUGxheWVyIH07XG5cbmNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIGNvbnN0IGF0dGFjayA9IChnYW1lYm9hcmQsIHgsIHkpID0+IHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH1cblxuICBjb25zdCByYW5kb21BdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3QgYm9hcmRMZW5ndGggPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgbGV0IGF0dGFja1Jlc3VsdCA9IC0yO1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIHdoaWxlIChhdHRhY2tSZXN1bHQgPT09IC0yKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvYXJkTGVuZ3RoKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm9hcmRMZW5ndGgpO1xuICAgICAgYXR0YWNrUmVzdWx0ID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gIH1cblxuICByZXR1cm4geyBnZXROYW1lLCBhdHRhY2ssIHJhbmRvbUF0dGFja307XG59IiwiZXhwb3J0IHsgU2hpcCB9O1xuXG5jb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgX2hpdENvdW50ID0gMDtcblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIF9oaXRDb3VudCsrO1xuICB9XG4gIFxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9oaXRDb3VudCA+PSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4geyBnZXRMZW5ndGgsIGhpdCwgaXNTdW5rIH07XG59IiwiZXhwb3J0IHsgZGlzcGxheUNvbnRyb2wgfTtcblxuY29uc3QgZGlzcGxheUNvbnRyb2wgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGRpdiA9IGZ1bmN0aW9uKC4uLmNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGNvbnN0IGJhc2ljU2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkaXYoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcbiAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZGl2KCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBIb3VuZG9vbSc7XG4gICAgXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIH1cblxuICBjb25zdCBnYW1lU2V0dXAgPSBmdW5jdGlvbihsZW4pIHtcbiAgICBjb25zdCBnYW1lID0gZGl2KCdnYW1lJyk7XG5cbiAgICBjb25zdCBnYW1lTWVzc2FnZSA9IGRpdignZ2FtZS1tZXNzYWdlJyk7XG4gICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSAnWW91IGhpdCBhIHNoaXAhJyAvL1xuXG4gICAgY29uc3QgZ2FtZURpc3BsYXkgPSBkaXYoJ2dhbWUtZGlzcGxheScpO1xuXG4gICAgY29uc3QgcGxheWVyU3BhY2VMZWZ0ID0gZGl2KCdwbGF5ZXItc3BhY2UnLCdsZWZ0Jyk7XG4gICAgY29uc3QgdHVybkRpc3BsYXkgPSBkaXYoJ3R1cm4tZGlzcGxheScpO1xuICAgIGNvbnN0IHBsYXllclNwYWNlUmlnaHQgPSBkaXYoJ3BsYXllci1zcGFjZScsICdyaWdodCcpO1xuXG4gICAgW3BsYXllclNwYWNlTGVmdCwgcGxheWVyU3BhY2VSaWdodF0uZm9yRWFjaChlID0+IHtcbiAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBkaXYoJ3BsYXllci1uYW1lJyk7XG4gICAgICBlLmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xuICAgICAgZS5hcHBlbmRDaGlsZChfY3JlYXRlR2FtZWJvYXJkKGxlbikpXG4gICAgfSk7XG5cbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChwbGF5ZXJTcGFjZUxlZnQpO1xuICAgIGdhbWVEaXNwbGF5LmFwcGVuZENoaWxkKHR1cm5EaXNwbGF5KTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChwbGF5ZXJTcGFjZVJpZ2h0KTtcblxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZU1lc3NhZ2UpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZURpc3BsYXkpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGdhbWUpO1xuXG4gIH1cblxuICBjb25zdCBfY3JlYXRlR2FtZWJvYXJkID0gZnVuY3Rpb24obGVuKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJvYXJkLWxlbmd0aCcsIGxlbik7XG5cbiAgICBjb25zdCBuZXdHYW1lYm9hcmQgPSBkaXYoJ2dhbWVib2FyZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gKiBsZW47IGkrKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZGl2KCdzcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgc3F1YXJlJHtpfWApO1xuICAgICAgbmV3R2FtZWJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0dhbWVib2FyZDtcbiAgfVxuXG4gIGNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uKGJvYXJkU2VsZWN0b3IsIGksIGhpdCA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkU2VsZWN0b3IpO1xuICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkID0gJ3NxdWFyZSR7aX0nXWApXG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRvZ2dsZSB3aGV0aGVyIGJvYXJkIGhhcyBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3QgdG9nZ2xlQm9hcmQgPSBmdW5jdGlvbihib2FyZFNlbGVjdG9yLCBmdW5jLCBkaXNhYmxlID0gZmFsc2UpIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm9hcmRTZWxlY3Rvcik7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcblxuICAgIGlmICghZGlzYWJsZSkgc3F1YXJlcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpXG4gICAgfSk7XG4gICAgZWxzZSBzcXVhcmVzLmZvckVhY2goZSA9PiBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYykpO1xuICB9XG5cbiAgcmV0dXJuIHsgYmFzaWNTZXR1cCAsIGdhbWVTZXR1cCwgYXR0YWNrLCB0b2dnbGVCb2FyZCB9O1xuXG59KSgpO1xuXG5kaXNwbGF5Q29udHJvbC5nYW1lU2V0dXAoMTApO1xuIiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2wgfSBmcm9tICcuL2Rpc3BsYXlDb250cm9sLmpzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vR2FtZWJvYXJkLmpzJ1xuXG5leHBvcnQgeyBnYW1lQ29udHJvbCB9O1xuXG5jb25zdCBnYW1lQ29udHJvbCA9ICgoKSA9PiB7XG5cbiAgY29uc3QgZ2FtZWJvYXJkcyA9IFtHYW1lYm9hcmQoMTApLCBHYW1lYm9hcmQoMTApXTtcbiAgY29uc3QgZ2FtZWJvYXJkU2VsZWN0b3JzID0gWycubGVmdCAuZ2FtZWJvYXJkJywgJy5yaWdodCAuZ2FtZWJvYXJkJ11cbiAgY29uc3QgcGxheWVycyA9IFtQbGF5ZXIoJ1BsYXllciAxJyksIFBsYXllcignQ29tcHV0ZXInKV07XG5cbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXAoMywgMSwgNSwgJ3YnKTtcbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXAoMSwgMCwgMywgJ2gnKTtcbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXAoMCwgNSwgMiwgJ2gnKTtcbiAgZ2FtZWJvYXJkc1swXS5wbGFjZVNoaXAoNiwgNiwgNCwgJ2gnKTtcblxuICBnYW1lYm9hcmRzWzFdLnBsYWNlU2hpcCgzLCAzLCA1LCAndicpO1xuICBnYW1lYm9hcmRzWzFdLnBsYWNlU2hpcCgxLCAxLCAzLCAnaCcpO1xuICBnYW1lYm9hcmRzWzFdLnBsYWNlU2hpcCgwLCA3LCAyLCAnaCcpO1xuICBnYW1lYm9hcmRzWzFdLnBsYWNlU2hpcCg2LCA2LCA0LCAndicpO1xuXG4gIGxldCBjdXJyUGxheWVyID0gMDtcblxuICBjb25zdCBfYXR0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLnN1YnN0cmluZyg2KTtcbiAgICBjb25zdCBlbmVteVBsYXllciA9IChjdXJyUGxheWVyICsgMSkgJSAyO1xuICAgIGNvbnN0IGxlbiA9IGdhbWVib2FyZHNbZW5lbXlQbGF5ZXJdLmdldExlbmd0aCgpO1xuICAgIGNvbnN0IHggPSBpZCAlIGxlbjtcbiAgICBjb25zdCB5ID0gKGlkIC0geCkgLyBsZW47XG4gICAgbGV0IGF0dGFja1Jlc3VsdCA9IGdhbWVib2FyZHNbZW5lbXlQbGF5ZXJdLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PSAtMSkge1xuICAgICAgZGlzcGxheUNvbnRyb2wuYXR0YWNrKGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIGlkKTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA+PSAwKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2soZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgaWQsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRlc3RmdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgZGlzcGxheUNvbnRyb2wudG9nZ2xlQm9hcmQoZ2FtZWJvYXJkU2VsZWN0b3JzWzFdLCBfYXR0YWNrKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZVR1cm4gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoY3VyclBsYXllciA9PT0gMCkgZGlzcGxheUNvbnRyb2wudG9nZ2xlQm9hcmQoZ2FtZWJvYXJkU2VsZWN0b3JzWzFdLCBfYXR0YWNrLCB0cnVlKTtcbiAgICBlbHNlIGRpc3BsYXlDb250cm9sLnRvZ2dsZUJvYXJkKGdhbWVib2FyZFNlbGVjdG9yc1sxXSwgX2F0dGFjayk7XG4gICAgY3VyclBsYXllciA9IChjdXJyUGxheWVyICsgMSkgJSAyO1xuICB9XG5cbiAgcmV0dXJuIHsgdGVzdGZ1bmMgfTtcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbCB9IGZyb20gJy4vZ2FtZUNvbnRyb2wuanMnO1xuXG5nYW1lQ29udHJvbC50ZXN0ZnVuYygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==