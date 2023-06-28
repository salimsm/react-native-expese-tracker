import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddScreen, CategoryScreen, ChartScreen, LoginScreen, MainScreen, RegisterScreen, SettingScreen, TranscationScreen} from '../screen';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="AddScreen" component={AddScreen} />
      <Stack.Screen name="TranscationScreen" component={TranscationScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="ChartScreen" component={ChartScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
