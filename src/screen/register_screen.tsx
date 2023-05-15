import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {registerFirebase} from '../utils/firebase/auth';
import {goBack} from '../utils/navigation';
import {AppString} from '../const/string/string';
import {CustomButton, CustomInputText} from '../common';
import {Formik} from 'formik';
import {registerValidate} from '../utils/register_validation';
import {textInputStyles} from '../styles';
import ErrorText from '../custom_widget/error_text';
import {AppColors} from '../const';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      initialValues={{email: '', pwd: ''}}
      validate={registerValidate}
      onSubmit={handleRegister}>
      {({handleChange, handleBlur, handleSubmit, errors, values}) => (
        <View style={styles.container}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Register
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
            text="Register"
            style={{justifyContent: 'center'}}
            onPress={handleRegister}
          />
          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.goBack('RegisterScreen')}>
            <Text style={{fontSize: 17}}>Login</Text>
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
  secondaryBtn:{
    backgroundColor: AppColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'flex-start',
    padding:8,
    borderRadius:20,
    marginVertical:10
  }
});
