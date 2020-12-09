import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

class ItemListComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.initialsContainer}>
          <Text></Text>
        </View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default ItemListComponent;
