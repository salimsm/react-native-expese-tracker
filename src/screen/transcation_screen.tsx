import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBar from '../custom_widget/appbar';
import {goBack} from '../utils/navigation';
import {useDispatch, useSelector} from 'react-redux';
import {AppColors} from '../const/colors/colors';
import SecondaryCard from '../custom_widget/secondary_card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomCalender from '../custom_widget/custom_calender';
import MessageCard from '../custom_widget/message_card';
import { CustomText } from '../common';

interface IData {
  amount: number;
  catagory: string;
  date: string;
  note: string;
}

export const TranscationScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  console.log('transcationlist');
  return (
    <View style={styles.container}>
      <AppBar title="Transcation" onBackPressed={() => goBack(navigation)} />
      <TouchableOpacity
        style={styles.chartBtn}
        onPress={() => navigation.navigate('ChartScreen')}>
        <Icon name="equalizer" size={35} color={AppColors.black} />
        <Text style={styles.chartBtnText}>Chart</Text>
      </TouchableOpacity>
      <TranscationList />
    </View>
  );
};


const TranscationList = () => {
  const data = useSelector((state: any) => state.transaction.transactionList);
  const [uiList, setUIList] = useState([]);
  //const [mark, setMark] = useState<any>();

  let mark: any = {};
  const mS = {selected: true, selectedColor: 'orange'};

  const filterList = (date: string) => {
    console.log(date, 'from filter list');
    const value = data.filter((item: any) => item.date === date);
    setUIList(value);
  };

  const filterMarkedList = () => {
    //const value =
    data.forEach((item: any) => {
      mark[item.date] = mS;
    });
    // setUIList(value);
    console.log(mark,'from function');
  };
  useEffect(() => {
    filterMarkedList();
  }, []);
  useEffect(() => {
    // console.log(mark);
    console.log('---------useEffect-------------');
    setUIList(data);
  }, []);

  return (
    <View style={{flex: 1}}>
      <CustomText text={'Filter By Date:'} />
      <CustomCalender
        showToday={false}
        getSelectedDate={(date: string): void => {
          filterList(date);
        }}
        mark={mark}
      />

      {uiList.length <= 0 ? (
        // <Text>Nothing to show</Text>
        <MessageCard msg="Nothing to show" />
      ) : (
        <FlatList
          data={uiList}
          renderItem={({item}: any) => <SecondaryCard item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
    justifyContent: 'center',
  },
  chartBtn: {
    borderRadius: 10,
    borderWidth: 1,
    width: 100,
    alignItems: 'center',
    padding: 4,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderColor: AppColors.black,
    elevation: 5,
    margin: 8,
  },
  chartBtnText: {fontSize: 17, color: 'black'},
});
