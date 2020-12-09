import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getFirstTwo} from '../../utils/helpers';
import {styles} from './styles';

class ItemListComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{getFirstTwo(this.props.name)}</Text>
        </View>
        <Text style={styles.name}>{this.props.name}</Text>
      </View>
    );
  }
}

export default ItemListComponent;
