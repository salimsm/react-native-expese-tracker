import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../common/Button/custom_button';
import CustomText from '../common/Text/custom_text';
import {AppColors} from '../const/colors/colors';
import {AppString, CategoryList} from '../const/string/string';
import RowContainer from './row_container';
import BackButton from './back_button';

interface IAppBar {
  title: string;
  onBackPressed: () => void;
}
const AppBar = ({title, onBackPressed}: IAppBar) => {
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

export default AppBar;
