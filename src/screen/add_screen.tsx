import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../common/Button/custom_button';
import CategorySelector from '../custom_widget/category_selector';
import CustomCalender from '../custom_widget/custom_calender';
import BackButton from '../custom_widget/back_button';
import {goBack} from '../utils/navigation';
import RowContainer from '../custom_widget/row_container';
import CustomInputText from '../common/Input Text/text_input';
import firestore from '@react-native-firebase/firestore';

const AddScreen = ({navigation}: any) => {
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');
  const [catagory, setCatagory] = useState('');
  const [date, setDate] = useState('');

  console.log('AddScreen');

  const handleSave = () => {
    Date.now();
    firestore()
      .collection('01userId')
      .add({
        note: note,
        amount: amount,
        catagory: catagory,
        date: date,
      })
      .then(() =>{
        setAmount(0);
        setNote('');
        
      });
    console.log({catagory: catagory, date: date, amount: amount, note: note});
  };
  return (
    <View style={styles.container}>
      <RowContainer style={styles.appbar}>
        <BackButton onPress={() => goBack(navigation)} />
        <Text style={styles.title}>Add Expense</Text>
        <Text></Text>
      </RowContainer>

      <ScrollView>
        <View style={styles.topHalf}>
          <TextInput
            placeholder="$0.0"
            style={styles.amtTextInput}
            keyboardType="number-pad"
            value={amount.toString()}
            onChangeText={v => setAmount(parseInt(v))}
          />
          <CustomInputText
            placeholder="Note"
            style={styles.noteTextInput}
            onChangeText={v => setNote(v)}
            value={note}
          />

          <CategorySelector getCategoryValue={value => setCatagory(value)} />
          <CustomCalender getDate={v => setDate(v)} />
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
