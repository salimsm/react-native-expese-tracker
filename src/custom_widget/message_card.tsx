import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../const';

export const MessageCard = ({msg}: {msg: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{msg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    elevation: 8,
    marginVertical: 20,
    backgroundColor: AppColors.background,
    borderRadius: 20,
    paddingVertical: 10,
  },
  text:{
    fontSize:18,
    color:AppColors.black
  }
});

export default MessageCard;
