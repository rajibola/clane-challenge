import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {h} from '../resposive-dimension';
import {colors} from '../../colors';
import PropTypes from 'prop-types';

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
        {leftIcon && (
          <Ionicons name={leftIcon} size={h(35)} color={colors.white} />
        )}
      </TouchableOpacity>
      <Text style={styles.center}>{title}</Text>
      <TouchableOpacity style={styles.minimumWidth} onPress={onPressRightIcon}>
        {rightIcon && (
          <Ionicons name={rightIcon} size={h(35)} color={colors.white} />
        )}
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  rightIcon: PropTypes.string,
  leftIcon: PropTypes.string,
  onPressRightIcon: PropTypes.func,
  onPressLeftIcon: PropTypes.func,
};

Header.defaultProps = {
  title: 'Header',
  rightIcon: null,
  leftIcon: null,
  onPressRightIcon: null,
  onPressLeftIcon: null,
};

export default Header;
