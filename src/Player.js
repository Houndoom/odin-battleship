export { Player };

const Player = (name) => {
  const getName = () => name;

  return { getName };
}