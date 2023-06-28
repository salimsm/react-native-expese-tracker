import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddScreen from './src/screen/add_screen';
import SplashScreen from 'react-native-splash-screen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {RootState, store} from './src/redux/store/store';
import {
  LoginScreen,
  RegisterScreen,
  TranscationScreen,
  SettingScreen,
  CategoryScreen,
  ChartScreen,
  MainScreen,
} from './src/screen';
import {getStorage} from './src/mmkv_storage/storage';
import {StorageKey} from './src/const';
import MainNavigation from './src/navigation/MainNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';
import {addUserToStore} from './src/redux/slice/userSlice';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Provider store={store}>
    <InitialPage/>
  </Provider>;
};

const InitialPage = () => {
  const userId = useSelector((state: RootState) => state.user.userId);
  const dispatch = useDispatch();
  const userFromStorage = getStorage(StorageKey.USER_ID);
  useEffect(() => {
    dispatch(addUserToStore(userFromStorage));
  }, []);
  return (
    <NavigationContainer>
      {userId ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default App;
