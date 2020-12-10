import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getFirstTwo, getfirstLetter} from '../../utils/helpers';
import {styles} from './styles';

class ItemListComponent extends Component {
  render() {
    const {name, isFirst} = this.props;
    const firstTwo = getFirstTwo(name);
    const firstLetter = getfirstLetter(name);
    return (
      <View style={styles.container}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{firstTwo}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>

        {isFirst && (
          <View style={styles.label}>
            <Text style={styles.labeltext}>{firstLetter}</Text>
          </View>
        )}
      </View>
    );
  }
}

export default ItemListComponent;
