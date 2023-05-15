import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddScreen from './src/screen/add_screen';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { LoginScreen, RegisterScreen, TranscationScreen, SettingScreen, CategoryScreen, ChartScreen, MainScreen } from './src/screen';
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
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        <Stack.Screen name="TranscationScreen" component={TranscationScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="ChartScreen" component={ChartScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
const styles = StyleSheet.create({});

export default App;
