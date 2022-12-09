/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
// import LoginScreen from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';

import {
  StyleSheet,
  
} from 'react-native';


const App: () => Node = () => {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
