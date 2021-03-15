export const Hero = (element, fieldSize) => {
  const init = () => {
    element.style.top = `${fieldSize}px`;
    element.style.fontSize = `${fieldSize * 0.9}px`;
    element.style.padding = `${(fieldSize * 0.1) / 2}px`;
  };

  return { init };
};
