import React from 'react';
import {View, Text} from 'react-native';
import {getFirstTwo, getfirstLetter} from '../../utils/helpers';
import {styles} from './styles';
import PropTypes from 'prop-types';

const ItemListComponent = ({name, isFirst}) => {
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
};

ItemListComponent.propTypes = {
  name: PropTypes.string,
  isFirst: PropTypes.bool,
};

ItemListComponent.defaultProps = {
  name: 'John Doe',
  isFirst: true,
};

export default ItemListComponent;
