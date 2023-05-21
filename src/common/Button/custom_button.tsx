import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface ICustomButton {
  icon?: string;
  text?: string;
  style?: StyleProp<ViewStyle>;
  onPress?:()=>void;
}
export const CustomButton = ({icon, text, style,onPress}: ICustomButton) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon && <Icon name={icon} size={28} style={styles.icon} />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    marginVertical: 8,
  },
  icon: {marginHorizontal: 20},
  text: {fontSize: 17},
});

