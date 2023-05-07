import auth from '@react-native-firebase/auth';

export const registerFirebase = (email: string, password: string): any => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      return value;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        throw 'That email address is already in use!';
      }
      if (error.code === 'auth/invalid-email') {
        throw 'That email address is invalid!';
      }
      if (error.code === 'auth/weak-password') {
        throw 'Password should be at least 6 character!';
      }
      throw error.code;
    });
};

export const loginFirebase = (email: string, password: string): any => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      return value;
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        throw 'That email address is invalid!';
      }
      if (error.code === 'auth/wrong-password') {
        throw 'Password is invalid!';
      }      
      throw error.code;
    });
};


