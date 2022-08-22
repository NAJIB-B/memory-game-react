export const suffleImages = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
};

export const startGame = () => {};
