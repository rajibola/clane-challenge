import React, {Component} from 'react';
import {View, ScrollView, ImageBackground, TextInput} from 'react-native';
import {Data} from '../../data';
import ItemListComponent from '../../shared/item-list-component';
import ListContainer from '../../shared/list-container';
import {styles} from './styles';
import {images} from '../../images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {h} from '../../shared/resposive-dimension';
import {colors} from '../../colors';
import TransparentHeader from '../../shared/transparent-header';
import {search} from '../../utils/helpers';
import SearchBar from '../../shared/search-bar';

class ListItems extends Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
      data: Data,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.topView()}

        {this.listView()}
      </View>
    );
  }

  search = (searchKeyword) => {
    var newSearch = search(this, Data);
    newSearch(searchKeyword);
  };

  topView() {
    return (
      <ImageBackground source={images.background} style={styles.background}>
        <TransparentHeader />
        <SearchBar that={this} />
      </ImageBackground>
    );
  }

  listView() {
    var {data} = this.state;
    var initials = new Set();
    data.map(({name}) => initials.add(name.toLowerCase().charAt(0)));
    var sortedItems = [...initials].sort();

    return (
      <ScrollView>
        {sortedItems.map((letter, index) => {
          return (
            <ListContainer key={index}>
              {data
                .filter(({name}) => name.toLowerCase().charAt(0) === letter)
                .map(({name}, i) => {
                  return (
                    <ItemListComponent isFirst={i === 0} name={name} key={i} />
                  );
                })}
            </ListContainer>
          );
        })}
      </ScrollView>
    );
  }
}

export default ListItems;
