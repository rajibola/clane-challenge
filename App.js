/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigations';

const App = () => {
  return <AppNavigator />;
};

export default App;
