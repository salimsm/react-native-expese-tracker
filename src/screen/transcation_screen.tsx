import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBar from '../custom_widget/appbar';
import {goBack} from '../utils/navigation';
import firestore from '@react-native-firebase/firestore';

interface IData {
  amount: number;
  catagory: string;
  date: string;
  note: string;
}

const TranscationScreen = ({navigation}: any) => {
  const [transaction, setTransaction] = useState<{}[]>([]);

  const getData = () => {
    firestore()
      .collection('01userId')
      .get()
      .then(collectionSnapshot => {
        const temp: {}[] = [];
        collectionSnapshot.forEach(documentSnapshot => {
          temp.push(documentSnapshot.data());
        });
        console.log(temp, 'TEMP');
        setTransaction(temp);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, [transaction]);
  return (
    <View style={styles.container}>
      <AppBar title="Transcation" onBackPressed={() => goBack(navigation)} />
      <View style={{flex: 1}}></View>
      <FlatList
        data={transaction}
        renderItem={({item}:any) => (
          <View style={{margin:4,backgroundColor:'orange'}}>
            <Text style={{fontSize:17,color:'black'}}>{item.date}</Text>
            <Text style={{fontSize:17,color:'black'}}>{item.note}</Text>
            <Text style={{fontSize:17,color:'black'}}>{item.amount}</Text>
            <Text style={{fontSize:17,color:'black'}}>{item.catagory}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default TranscationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
    justifyContent: 'center',
  },
});
