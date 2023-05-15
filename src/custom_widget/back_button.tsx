import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IBackButton {
  onPress: () => void;
}
export const BackButton = ({onPress}: IBackButton) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="chevron-left" size={30} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    backgroundColor: 'orange',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});