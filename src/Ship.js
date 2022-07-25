export { Ship };

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