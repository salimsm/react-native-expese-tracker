import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../common/Button/custom_button';
import CustomInputText from '../common/Input Text/text_input';
import {loginFirebase} from '../utils/firebase/auth';
import {AppString} from '../const/string/string';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('bob2@gmail.com');
  const [password, setPassword] = useState('12345');

  const handleLogin = async () => {
    try {
      const response = await loginFirebase(email, password);
      
    } catch (e: any) {
      ToastAndroid.show(e, ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        Login
      </Text>
      <CustomInputText
        placeholder="Email"
        onChangeText={value => setEmail(value)}
      />
      <CustomInputText
        placeholder="Password"
        onChangeText={value => setPassword(value)}
      />
      <CustomButton
        text="Login"
        style={{justifyContent: 'center'}}
        onPress={handleLogin}
      />
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={{textAlign: 'right'}}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
    justifyContent: 'center',
  },
});
