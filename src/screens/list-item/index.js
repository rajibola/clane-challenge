import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import {Data} from '../../data';
import {styles} from './styles';
import {images} from '../../images';
import TransparentHeader from '../../shared/transparent-header';
import SearchBar from '../../shared/search-bar';
import ListComponent from '../../shared/list-component';

class ListItems extends Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
      data: Data,
    };
  }

  render() {
    const {searchKeyword, data} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background} style={styles.background}>
          <TransparentHeader />
          <SearchBar value={searchKeyword} onChangeText={this.search} />
        </ImageBackground>

        <ListComponent data={data} />
      </View>
    );
  }

  search = (searchKeyword) => {
    var {data} = this.state;
    var newData = data.filter((item) =>
      item.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );

    this.setState({
      data: newData,
      searchKeyword,
    });
  };
}

export default ListItems;
