export const getfirstCharacters = (end) => {
  return (name) => {
    return name.substring(0, end);
  };
};

export const getFirstTwo = getfirstCharacters(2);

export const getfirstLetter = getfirstCharacters(1);
