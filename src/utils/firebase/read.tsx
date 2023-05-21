import firestore from '@react-native-firebase/firestore';
import {addTranscation} from '../../redux/slice/transactionSlice';

export const getData = (dispatch: any) => {
  firestore()
    .collection('01userId')
    .get()
    .then(collectionSnapshot => {
      const temp: {}[] = [];
      collectionSnapshot.forEach(documentSnapshot => {
        temp.push(documentSnapshot.data());
      });
      dispatch(addTranscation(temp));
    })
    .catch(err => console.log(err));
};
