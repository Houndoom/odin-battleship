export { Player };

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