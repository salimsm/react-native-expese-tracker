import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainScreen from './src/screen/main_screen';

const App = () => {
  return <SafeAreaView style={{flex:1}}>
    <MainScreen/>
  </SafeAreaView>;
};

const styles = StyleSheet.create({});

export default App;
