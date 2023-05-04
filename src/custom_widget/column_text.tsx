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
  subTitle: string | number;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
}
const ColumnText = ({
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
  container: {alignItems: 'flex-start'},
  title: {fontSize: 14},
  subTitle: {fontSize: 20, fontWeight: 'bold'},
});

export default ColumnText;
