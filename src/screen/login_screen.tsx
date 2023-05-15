import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {loginFirebase} from '../utils/firebase/auth';
import {CustomButton} from '../common';
import {Formik} from 'formik';
import {loginValidate} from '../utils/login_validation';
import ErrorText from '../custom_widget/error_text';
import {textInputStyles} from '../styles';

export const LoginScreen = ({navigation}: any) => {
  // const [email, setEmail] = useState('bob2@gmail.com');
  // const [password, setPassword] = useState('12345');

  const handleLogin = async (values:any) => {
    console.log(values,'values');
    
    try {
      const response = await loginFirebase(values.email, values.pwd);
      console.log(response,'response');
      
    } catch (e: any) {
      ToastAndroid.show(e, ToastAndroid.SHORT);
    }
  };
  return (
    <Formik
      initialValues={{email: '', pwd: ''}}
      validate={loginValidate}
      onSubmit={handleLogin}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <View style={styles.container}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Login
          </Text>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={textInputStyles.textInput}
          />
          {errors.email && <ErrorText message={errors.email} />}

          <TextInput
            onChangeText={handleChange('pwd')}
            onBlur={handleBlur('pwd')}
            value={values.pwd}
            style={textInputStyles.textInput}
          />
          {errors.pwd && <ErrorText message={errors.pwd} />}

          <CustomButton
            text="Login"
            style={{justifyContent: 'center'}}
            onPress={handleSubmit}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{textAlign: 'right'}}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
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
