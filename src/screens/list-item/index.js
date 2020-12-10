import React, {Component} from 'react';
import {View, Text, ScrollView, ImageBackground, TextInput} from 'react-native';
import {Data} from '../../data';
import ItemListComponent from '../../shared/item-list-component';
import ListContainer from '../../shared/list-container';
import {styles} from './styles';
import {images} from '../../images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {h} from '../../shared/resposive-dimension';
import {colors} from '../../colors';
import TransparentHeader from '../../shared/transparent-header';

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
    var newData = Data.filter((item) =>
      item.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
    return this.setState({
      data: newData,
      searchKeyword,
    });
  };
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

  topView() {
    return (
      <ImageBackground source={images.background} style={styles.background}>
        <TransparentHeader />

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={h(18)} style={styles.searchIcon} />

          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.darkGray}
            onChangeText={this.search}
            style={styles.search}
            value={this.state.searchKeyword}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default ListItems;
