import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {goBack} from '../utils/navigation';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../utils/firebase/read';
import {CustomButton, CustomInputText, CustomText} from '../common';
import { AppBar } from '../custom_widget';
import { AppColors } from '../const';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { clearStorage, storage } from '../mmkv_storage/storage';
import { removeUserFromStore } from '../redux/slice/userSlice';
import { AppDispatch, RootState } from '../redux/store/store';

export const SettingScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const u =   useSelector((state:RootState) => state.user.userId);

  useEffect(() => {
    getData(dispatch);
  }, []);

  const logout=()=>{
    clearStorage();
    dispatch(removeUserFromStore());
  }
  return (
    <View style={styles.container}>
      <AppBar title="Setting" onBackPressed={() => goBack(navigation)} />
      <View style={styles.subContainer}>
      <CustomText text='User Id'  style={styles.title}/>
      <CustomText text={u} />
      <CustomText text='Your Current Income:' style={styles.title}/>
        <CustomInputText placeholder="Change Income" onChangeText={v => {}} />
        <CustomButton onPress={() => {}} text="Change" style={styles.button} />
        
      <CustomButton onPress={logout} text="Logout" style={[styles.button,styles.logoutBtn]} />
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
  button: {justifyContent: 'center',marginBottom:50},
  logoutBtn:{borderColor:AppColors.primary,borderWidth:3,backgroundColor:AppColors.background},
  title:{
    marginTop:8,
    fontWeight:'bold'
  }
});
