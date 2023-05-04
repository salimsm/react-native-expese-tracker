import React from 'react';
import {StyleSheet} from 'react-native';
import MainScreen from './src/screen/main_screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddScreen from './src/screen/add_screen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});

export default App;
