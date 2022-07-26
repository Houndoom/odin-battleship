import { Ship } from './Ship.js';
export { Gameboard };

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
        _ships.push(Ship(shipLen));
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
        _ships.push(Ship(shipLen));
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