import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { goToNextPage } from '../utils/navigation';
import { ColumnText } from './column_text';
import { getStorage } from '../mmkv_storage/storage';

export const Header = ({navigation}:any) => {
  const userEmail=getStorage('USER_EMAIL');
  return (
    <View
      style={styles.container}>
      <ColumnText title="Welcome" subTitle={userEmail} />
      <TouchableOpacity
        style={styles.button} onPress={()=>goToNextPage(navigation,'SettingScreen')}>
        <Icon name="settings" color="white" size={28} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default Header;
