import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import MainScreen from './src/screen/main_screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddScreen from './src/screen/add_screen';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/screen/login_screen';
import RegisterScreen from './src/screen/register_screen';
import TranscationScreen from './src/screen/transcation_screen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import SettingScreen from './src/screen/setting_screen';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        <Stack.Screen name="TranscationScreen" component={TranscationScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
const styles = StyleSheet.create({});

export default App;
