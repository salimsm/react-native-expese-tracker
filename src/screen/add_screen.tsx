import {
  ScrollView,
  StyleSheet,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomCalender from '../custom_widget/custom_calender';
import {goBack} from '../utils/navigation';
import firestore from '@react-native-firebase/firestore';
import {getDate} from '../utils/date';
import { CustomInputText, CustomButton } from '../common';
import { AppBar, CategorySelector } from '../custom_widget';

export const AddScreen = ({navigation}: any) => {
  const [amount, setAmount] = useState<number>(0);
  const [note, setNote] = useState('');
  const [catagory, setCatagory] = useState('Shopping');
  const [date, setDate] = useState(getDate());

  console.log('AddScreen');
  const handleSave = () => {
    if (amount <= 0) {
      ToastAndroid.show('Amount cannot be 0 or less!', ToastAndroid.SHORT);
    } else if (note === '' || note === null) {
      ToastAndroid.show('Note cannot be empty!', ToastAndroid.SHORT);
    } else {
      firestore()
        .collection('01userId')
        .add({
          note: note,
          amount: amount,
          catagory: catagory,
          date: date,
        })
        .then(() => {
          setAmount(0);
          setNote('');
          ToastAndroid.show('Sucessfully added!', ToastAndroid.SHORT);
        });
    }
    console.log({catagory: catagory, date: date, amount: amount, note: note});
  };
  return (
    <View style={styles.container}>
      <AppBar title="Add Expense" onBackPressed={() => goBack(navigation)} />

      <ScrollView>
        <View style={styles.topHalf}>
          <TextInput
            // placeholder="$0.0"
            style={styles.amtTextInput}
            keyboardType="number-pad"
            value={amount.toString()}
            onChangeText={v => {
              let numValue = parseInt(v, 10);
              if (v == '') {
                setAmount(0);
              }
              if (v.length > 0 && !Number.isNaN(numValue)) {
                setAmount(numValue);
              }
            }}
          />
          <CustomInputText
            placeholder="Note"
            style={styles.noteTextInput}
            onChangeText={v => setNote(v)}
            value={note}
          />

          <CategorySelector getCategoryValue={value => setCatagory(value)} />
          <CustomCalender getSelectedDate={v => {setDate(v); console.log(v);
          }} />
        </View>
      </ScrollView>
      <CustomButton
        text="Save"
        style={{justifyContent: 'center'}}
        onPress={handleSave}
      />
    </View>
  );
};
export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
  },
  topHalf: {
    flex: 1,
    backgroundColor: '#F0EAF4',
  },
  appbar: {alignItems: 'center', paddingBottom: 8},
  title: {textAlign: 'center', fontSize: 20, fontWeight: 'bold'},
  amtTextInput: {
    borderWidth: 1,
    borderRadius: 30,
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 8,
  },
  noteTextInput: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 15,
    marginVertical: 8,
    paddingHorizontal: 14,
  },
});