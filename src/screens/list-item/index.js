import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  StatusBar,
} from 'react-native';
import {Data} from '../../data';
import ItemListComponent from '../../shared/item-list-component';
import ListContainer from '../../shared/list-container';
import {styles} from './styles';
import {images} from '../../images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {h} from '../../shared/resposive-dimension';
import {colors} from '../../colors';

class ListItems extends Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
      isSearching: false,
      data: Data,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar setBackgroundColor="transparent" />
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
    var initials = new Set();
    this.state.data.map(({name}) => initials.add(name.toLowerCase().charAt(0)));
    var sortedItems = [...initials].sort();

    return (
      <ScrollView>
        {sortedItems.map((letter, index) => {
          return (
            <ListContainer
              key={index}
              children={this.state.data
                .filter(({name}) => name.toLowerCase().charAt(0) === letter)
                .map(({name}, i) => {
                  return (
                    <ItemListComponent
                      isFirst={i == 0 && true}
                      name={name}
                      key={i}
                    />
                  );
                })}
            />
          );
        })}
      </ScrollView>
    );
  }

  topView() {
    return (
      <ImageBackground source={images.background} style={styles.background}>
        {this.transparentHeader()}

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

  transparentHeader() {
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

export default ListItems;
