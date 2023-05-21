import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

interface IText {
  text?: string;
  color?: string;
  //   fontSize?: number;
  style?: StyleProp<TextStyle>;
}

const CustomText = ({text, color, style}: IText) => {
  return <Text style={[styles.default, {color: color}, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
  },
});

export default CustomText;
