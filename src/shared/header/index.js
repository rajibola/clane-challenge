import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {h} from '../resposive-dimension';
import {colors} from '../../colors';

const Header = ({
  title,
  rightIcon,
  leftIcon,
  onPressRightIcon,
  onPressLeftIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.minimumWidth} onPress={onPressLeftIcon}>
        {leftIcon ? (
          leftIcon
        ) : (
          <Ionicons
            name="ios-close-outline"
            size={h(35)}
            color={colors.white}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.center}>{title}</Text>
      <TouchableOpacity style={styles.minimumWidth} onPress={onPressRightIcon}>
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
