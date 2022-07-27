export { Ship };

const Ship = (length) => {
  let _hitCount = 0;

  const getLength = () => length;

  const hit = () => {
    _hitCount++;
    if (isSunk()) return true;
    else return false;
  }
  
  const isSunk = () => {
    return _hitCount >= length;
  }

  return { getLength, hit, isSunk };
}