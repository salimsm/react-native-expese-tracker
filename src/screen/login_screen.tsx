import {
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
import {AppColors, StorageKey} from '../const';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { setStorage } from '../mmkv_storage/storage';
import { RegisterScreen } from './register_screen';
import { MainScreen } from './main_screen';
import { useDispatch } from 'react-redux';
import { addUserToStore } from '../redux/slice/userSlice';

export const LoginScreen = ({navigation}: any) => {
  // const [email, setEmail] = useState('bob2@gmail.com');
  // const [password, setPassword] = useState('12345');
  const dispatch = useDispatch();
  const doLogin = async (values: any) => {
    console.log(values, 'values');

    try {
      const response = await loginFirebase(values.email, values.pwd);
      console.log(response, 'response');
      setStorage(StorageKey.USER_ID ,response.user.uid);
      setStorage(StorageKey.USER_EMAIL,response.user.email);
      dispatch(addUserToStore(response.user.uid));
      //navigation.navigate('MainScreen');
    } catch (e: any) {
      ToastAndroid.show(e, ToastAndroid.SHORT);
    }
  };
  return (
    <Formik
      initialValues={{email: '', pwd: ''}}
      validate={loginValidate}
      onSubmit={doLogin}>
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
            placeholder="Email"
          />
          {errors.email && <ErrorText message={errors.email} />}

          <TextInput
            onChangeText={handleChange('pwd')}
            onBlur={handleBlur('pwd')}
            value={values.pwd}
            style={textInputStyles.textInput}
            placeholder="Password"
          />
          {errors.pwd && <ErrorText message={errors.pwd} />}

          <CustomButton
            text="Login"
            style={{justifyContent: 'center'}}
            onPress={handleSubmit}
          />

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{fontSize: 17}}>Register</Text>
            <Icon name="arrow-forward" size={20}/>
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
  secondaryBtn: {
    backgroundColor: AppColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 20,
    marginVertical: 10,
  },
});
