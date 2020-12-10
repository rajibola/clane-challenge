import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {h} from '../resposive-dimension';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../colors';

class SearchBar extends Component {
  render() {
    const {that} = this.props;
    return (
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={h(18)} style={styles.searchIcon} />

        <TextInput
          placeholder="Search"
          placeholderTextColor={colors.darkGray}
          onChangeText={that.search}
          style={styles.search}
          value={that.state.searchKeyword}
        />
      </View>
    );
  }
}

export default SearchBar;
