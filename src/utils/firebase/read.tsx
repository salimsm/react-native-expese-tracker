import firestore from '@react-native-firebase/firestore';
import {addTranscation} from '../../redux/slice/transactionSlice';
import { StorageKey } from '../../const';
import { getStorage } from '../../mmkv_storage/storage';

export const getData = (dispatch: any) => {
  const uid = getStorage(StorageKey.USER_ID);
  firestore()
    .collection(uid!)
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
