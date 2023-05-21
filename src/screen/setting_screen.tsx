import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {goBack} from '../utils/navigation';
import {useDispatch} from 'react-redux';
import {getData} from '../utils/firebase/read';
import {CustomButton, CustomInputText, CustomText} from '../common';
import { AppBar } from '../custom_widget';

export const SettingScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData(dispatch);
  }, []);
  return (
    <View style={styles.container}>
      <AppBar title="Setting" onBackPressed={() => goBack(navigation)} />
      <View style={styles.subContainer}>
        <CustomInputText placeholder="Change Income" onChangeText={v => {}} />
        <CustomButton onPress={() => {}} text="Change" style={styles.button} />
        <CustomText />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
    justifyContent: 'center',
  },
  subContainer: {flex: 1},
  button: {justifyContent: 'center'},
});
