/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigations';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#0575E6'} />
      <AppNavigator />
    </View>
  );
};

export default App;
