import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBar from '../custom_widget/appbar';
import {goBack} from '../utils/navigation';
import { useDispatch } from 'react-redux';
import { getData } from '../utils/firebase/read';

const SettingScreen = ({navigation}: any) => {
  const dispatch= useDispatch();

  useEffect(()=>{
    getData(dispatch);
  },[]);
  return (
    <View style={styles.container}>
      <AppBar title="Setting" onBackPressed={() => goBack(navigation)} />
      <View style={{flex: 1}}></View>
    </View>
  );
};
export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
    justifyContent: 'center',
  },
});
