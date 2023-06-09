import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {registerFirebase} from '../utils/firebase/auth';
import {goBack} from '../utils/navigation';
import {AppString} from '../const/string/string';
import {CustomButton, CustomInputText} from '../common';
import { Formik } from 'formik';

export const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('bob2@gmail.com');
  const [password, setPassword] = useState('123456');

  const handleRegister = async () => {
    try {
      const response = await registerFirebase(email, password);
      console.log(response, 'Response form reg screen');
      goBack(navigation);
      ToastAndroid.show(
        AppString.toast_msg.register_sucessfully,
        ToastAndroid.SHORT,
      );
    } catch (e: any) {
      ToastAndroid.show(e, ToastAndroid.SHORT);
    }
  };

  return (
    <Formik 
      initialValues={{email:'',pwd:''}}
      validate={registerValidate}
    >
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Register
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
          text="Register"
          style={{justifyContent: 'center'}}
          onPress={handleRegister}
        />
        <TouchableOpacity onPress={() => navigation.goBack('RegisterScreen')}>
          <Text style={{textAlign: 'right'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
    justifyContent: 'center',
  },
});
