import React, {Component} from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import {Data} from '../../data';
import ItemListComponent from '../../shared/item-list-component';
import ListContainer from '../../shared/list-container';
import {styles} from './styles';

class ListItems extends Component {
  render() {
    var initials = new Set();
    Data.map(({name}) => initials.add(name.toLowerCase().charAt(0)));
    var sortedItems = [...initials].sort();

    return (
      <View style={styles.container}>
        {this.topView()}

        <ScrollView>
          {sortedItems.map((letter, index) => {
            return (
              <ListContainer
                key={index}
                children={Data.filter(
                  ({name}) => name.toLowerCase().charAt(0) === letter,
                ).map(({name}, i) => {
                  return <ItemListComponent name={name} key={i} />;
                })}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }

  topView() {
    return (
      <ImageBackground>
        <Text>Hello</Text>
      </ImageBackground>
    );
  }
}

export default ListItems;
