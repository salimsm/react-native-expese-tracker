import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface IColumnText {
  title: string;
  subTitle: string | number|undefined;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
}
export const ColumnText = ({
  title,
  subTitle,
  style,
  titleStyle,
  subTitleStyle,
}: IColumnText) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.subTitle, subTitleStyle]}>{subTitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {alignItems: 'flex-start',flex:1},
  title: {fontSize: 14},
  subTitle: {fontSize: 17, fontWeight: 'bold'},
});

