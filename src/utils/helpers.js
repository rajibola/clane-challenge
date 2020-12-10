import React from 'react';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const h = (height) => {
  return heightPercentageToDP((height / 812) * 100);
};

export const w = (width) => {
  return widthPercentageToDP((width / 375) * 100);
};

export const getfirstCharacters = (end) => {
  return (name) => {
    return name.substring(0, end);
  };
};

export const getFirstTwo = getfirstCharacters(2);

export const getfirstLetter = getfirstCharacters(1);
