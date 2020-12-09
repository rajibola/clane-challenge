import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getFirstTwo} from '../../utils/helpers';
import {styles} from './styles';

class ItemListComponent extends Component {
  render() {
    const {name} = this.props;
    const firstTwo = getFirstTwo(name);
    return (
      <View style={styles.container}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{firstTwo}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
}

export default ItemListComponent;
