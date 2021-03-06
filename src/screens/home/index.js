import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import {Data} from '../../data';
import {styles} from './styles';
import {images} from '../../images';
import SearchBar from '../../shared/search-bar';
import ListComponent from '../../shared/list-component';
import Header from '../../shared/header';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
      data: Data,
    };
  }

  search = (searchKeyword) => {
    var newData = Data.filter((item) =>
      item.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
    this.setState({
      data: newData,
      searchKeyword,
    });
  };

  render() {
    const {searchKeyword, data} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background} style={styles.background}>
          <Header title="Profession" leftIcon="ios-close-outline" />
          <SearchBar value={searchKeyword} onChangeText={this.search} />
        </ImageBackground>

        <ListComponent data={data} />
      </View>
    );
  }
}

export default Home;
