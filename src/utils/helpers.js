export const getfirstCharacters = (end) => {
  return (name) => {
    return name.substring(0, end);
  };
};

export const getFirstTwo = getfirstCharacters(2);

export const getfirstLetter = getfirstCharacters(1);

export const search = (that, data) => {
  return (searchKeyword) => {
    var newData = data.filter((item) =>
      item.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
    return that.setState({
      data: newData,
      searchKeyword,
    });
  };
};
