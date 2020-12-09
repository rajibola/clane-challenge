import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ItemListComponent from '../../shared/item-list-component';
import ListContainer from '../../shared/list-container';
import {styles} from './styles';

class ListItems extends Component {
  render() {
    var initials = new Set();

    arr.map(({name}) => initials.add(name.toLowerCase().charAt(0)));

    var sortedItems = [...initials].sort();
    console.log(sortedItems);
    return (
      <View style={styles.container}>
        <Text>Hello</Text>

        <ScrollView>
          {sortedItems.map((letter) => {
            return (
              <ListContainer
                children={arr
                  .filter(({name}) => name.toLowerCase().charAt(0) === letter)
                  .map(function ({name}) {
                    return <ItemListComponent name={name} />;
                  })}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default ListItems;

var arr = [
  {name: 'Ahmed'},
  {name: 'Moso'},
  {name: 'Zamani'},
  {name: 'Carter'},
  {name: 'Mofe'},
  {name: 'Bolu'},
  {name: 'HOD'},
  {name: 'Idris'},
  {name: 'Kaka'},
  {name: 'Marius'},
  {name: 'Ife'},
  {name: 'Kazeem'},
  {name: 'Ope'},
  {name: 'Mariam'},
  {name: 'Mama'},
  {name: 'Papa'},
];
