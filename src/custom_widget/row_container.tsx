import React from 'react';
import {StyleSheet, View} from 'react-native';

export const RowContainer = ({children, style}: any) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default RowContainer;
