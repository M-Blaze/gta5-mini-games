const CHARACTERS = "0123456789ABCDEF";

export const generateCharacter = () => {
  const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
  const randomCharacter = CHARACTERS[randomIndex];

  return randomCharacter;
};
