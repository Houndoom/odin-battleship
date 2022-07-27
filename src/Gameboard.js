import { Ship } from './Ship.js';
export { Gameboard };

const Gameboard = (len) => {
  let _board = new Array(len); // All positions on board
  for (let i = 0; i < len; i++) {
    _board[i] = new Array(len)
  }

  let _ships = []; // All Ship objects on board
  let _shipPositions = []; // Starting x, y, ship length, and ship direction values for each ship
  const _boardSize = len*len; 


  const getLength = () => len;

  // Creates a Ship object and places it on the board
  // x, y are coordinates of the starting square
  // shipLen is the ship length, and dir is the ship direction
  const placeShip = function(x, y, shipLen, dir) {
    if (dir === 'h') { // Horizontal ship
      if (x <= len - shipLen) { // Starting column needs to be at most board length less ship length
        for (let i = x; i < x + shipLen; i++) {
          if (_board[i][y] >= 0) return false; // Don't place ship if any square is already occupied
        } // Otherwise create ship and record in the relevant arrays
        _ships.push(Ship(shipLen));
        _shipPositions.push([x, y, shipLen, dir]);
        for (let i = x; i < x + shipLen; i++) {
          _board[i][y] = _ships.length - 1; // Indicate position on board occupied by ship by labelling with ship number
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
        _shipPositions.push([x, y, shipLen, dir]);
        for (let i = y; i < y + shipLen; i++) {
          _board[x][i] = _ships.length - 1;
        }
        return true;
      }
    }
    return false; // If starting column/row too large, don't place the ship
  }
  
  // Place a ship randomly
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

  // Attack a square at coordinates x, y
  const receiveAttack = function(x, y) {
    // There cannot be a ship with number >= _boardSize, so can use numbers >= _boardSize to identify hit squares
    if (_board[x][y] === undefined) { // Unhit empty square
      _board[x][y] = _boardSize; // Make it >= _boardSize to indicate that it has been hit
      return -1;
    } else if (_board[x][y] < _boardSize) { // Unhit ship square
      const shipNo = _board[x][y];
      _board[x][y] += _boardSize; // Make it >= _boardSize to indicate that it has been hit
      if (_ships[shipNo].hit()) {
        return _shipPositions[shipNo]; // return ship positions if ship is sunk
      } else return 0; // return 0 if hit ship not sunk
    } else return -2; // Square already hit
  }

  // Check if all ships on board are sunk
  const allSunk = function() {
    if (!_ships) return false;
    return _ships.reduce((a, b) => a && b.isSunk(), true);
  }

  const getShipPositions = () => _shipPositions;

  return { placeShip, receiveAttack, allSunk, getLength, placeShipRandom, getShipPositions };
}