import React from 'react';
import {View, TextInput} from 'react-native';
import {h} from '../resposive-dimension';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../colors';

const SearchBar = ({onChangeText, value}) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={h(18)} style={styles.searchIcon} />

      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.darkGray}
        onChangeText={onChangeText}
        style={styles.search}
        value={value}
      />
    </View>
  );
};

export default SearchBar;
