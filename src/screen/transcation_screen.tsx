import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBar from '../custom_widget/appbar';
import {goBack} from '../utils/navigation';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {AppColors} from '../const/colors/colors';
import RowContainer from '../custom_widget/row_container';
import SecondaryCard from '../custom_widget/secondary_card';
import {catagoryByMonth} from '../redux/slice/transactionSlice';
import ChartScreen from './chart_screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IData {
  amount: number;
  catagory: string;
  date: string;
  note: string;
}

const TranscationScreen = ({navigation}: any) => {
  // const [transaction, setTransaction] = useState<{}[]>([]);
  // const getData = () => {
  //   firestore()
  //     .collection('01userId')
  //     .get()
  //     .then(collectionSnapshot => {
  //       const temp: {}[] = [];
  //       collectionSnapshot.forEach(documentSnapshot => {
  //         temp.push(documentSnapshot.data());
  //       });
  //       console.log(temp, 'TEMP');
  //       setTransaction(temp);
  //     })
  //     .catch(err => console.log(err));
  // };
  const data = useSelector((state: any) => state.transaction);
  const dispatch = useDispatch();

  console.log();
  console.log('transcationlist');
  console.log(data.transactionList);

  return (
    <View style={styles.container}>
      <AppBar title="Transcation" onBackPressed={() => goBack(navigation)} />

      <TouchableOpacity
        style={styles.chartBtn}
        onPress={()=>navigation.navigate('ChartScreen')}
        >
        <Icon name='equalizer'size={35} color={AppColors.black}/>  
        <Text style={styles.chartBtnText}>Chart</Text>
      </TouchableOpacity>

      <View style={{flex: 1}}>
        <FlatList
          data={data.transactionList}
          renderItem={({item}: any) => <SecondaryCard item={item} />}
        />
      </View>
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
  chartBtn:{
    borderRadius: 10,
    borderWidth: 1,
    width: 100,
    alignItems: 'center',
    padding: 4,
    alignSelf: 'flex-end',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'orange',
    borderColor:AppColors.black,
    elevation:5,
    margin:8

  },
  chartBtnText:{fontSize:17,color:'black'}
});
