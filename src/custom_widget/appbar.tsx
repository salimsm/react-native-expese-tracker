import React from 'react';
import {StyleSheet, Text} from 'react-native';
import RowContainer from './row_container';
import { BackButton } from './back_button';

interface IAppBar {
  title: string;
  onBackPressed: () => void;
}
export const AppBar = ({title, onBackPressed}: IAppBar) => {
  return (
    <RowContainer style={styles.appbar}>
      <BackButton onPress={onBackPressed} />
      <Text style={styles.title}>{title}</Text>
      <Text></Text>
    </RowContainer>
  );
};

const styles = StyleSheet.create({
  appbar: {alignItems: 'center', paddingBottom: 8},
  title: {textAlign: 'center', fontSize: 20, fontWeight: 'bold'},
});