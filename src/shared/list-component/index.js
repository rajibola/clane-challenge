import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './styles';
import ItemListComponent from '../item-list-component';

const ListComponent = ({data}) => {
  var initials = new Set();
  data.map(({name}) => initials.add(name.toLowerCase().charAt(0)));
  var sortedItems = [...initials].sort();

  return (
    <ScrollView>
      {sortedItems.map((letter, index) => {
        return (
          <View key={index} style={styles.listContainer}>
            {data
              .filter(({name}) => name.toLowerCase().charAt(0) === letter)
              .map(({name}, i) => {
                return (
                  <ItemListComponent isFirst={i === 0} name={name} key={i} />
                );
              })}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ListComponent;
