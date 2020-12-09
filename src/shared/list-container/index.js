import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

class ListContainer extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

export default ListContainer;
