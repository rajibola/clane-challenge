import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {h} from '../resposive-dimension';
import {colors} from '../../colors';

class TransparentHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.minimumWidth}>
          <Ionicons
            name="ios-close-outline"
            size={h(35)}
            color={colors.white}
          />
        </View>
        <Text style={styles.center}>Profession</Text>
        <Text style={styles.minimumWidth}></Text>
      </View>
    );
  }
}

export default TransparentHeader;
