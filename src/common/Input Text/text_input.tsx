import {StyleProp, StyleSheet, Text, TextInput, TextStyle} from 'react-native';

interface IInputText {
  placeholder?: string;
  onChangeText:(value:string)=>void;
  secureText?:boolean;
  
  style?: StyleProp<TextStyle>;
}

const CustomInputText = ({placeholder,onChangeText ,style,secureText=false}: IInputText) => {
  return <TextInput
  placeholder={placeholder}
  onChangeText={onChangeText}
  secureTextEntry={secureText}
  style={styles.textInput}
/>;
};

const styles = StyleSheet.create({
  textInput:{
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 15,
    marginVertical: 8,
    paddingHorizontal: 14,
  }
});

export default CustomInputText;
