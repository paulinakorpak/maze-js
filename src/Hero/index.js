export const Hero = (element, fieldSize) => {
  const init = () => {
    element.style.fontSize = `${fieldSize * 0.9}px`;
    element.style.padding = `${(fieldSize * 0.1) / 2}px`;
  };

  const move = (row, col) => {
    element.style.top = `${row * fieldSize}px`;
    element.style.left = `${col * fieldSize}px`;
  };

  return { init, move };
};
