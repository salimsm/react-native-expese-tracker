import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../common/Button/custom_button';
import CategorySelector from '../custom_widget/category_selector';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomCalender from '../custom_widget/custom_calender';
import BackButton from '../custom_widget/back_button';
import { goBack } from '../utils/navigation';

const AddScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <BackButton onPress={()=>goBack(navigation)}/>
      <ScrollView>
        <View style={styles.topHalf}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Add Expense
          </Text>
          <TextInput
            placeholder="$0.0"
            style={{
              borderWidth: 1,
              borderRadius: 30,
              textAlign: 'center',
              fontSize: 30,
              marginVertical: 8,
            }}
          />
          <TextInput
            placeholder="Note"
            style={{
              borderWidth: 1,
              borderRadius: 10,
              fontSize: 20,
              marginVertical: 8,
              paddingHorizontal: 14,
            }}
          />

          <CategorySelector getCategoryValue={value => console.log(value)} />

          {/* <CustomButton icon="calendar-today" text="Date" />
          <Calendar onDayPress={value => {}} /> */}

          <CustomCalender
            getDate={v => {
              console.log(v);
            }}
          />
        </View>
      </ScrollView>

      <CustomButton text="Save" style={{justifyContent: 'center'}} />
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
});
