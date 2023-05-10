import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../common/Button/custom_button';
import CustomText from '../common/Text/custom_text';
import {AppColors} from '../const/colors/colors';
import {Calendar} from 'react-native-calendars';
import { getDate } from '../utils/date';

interface ICustomCalender {
  getSelectedDate: (category: string) => void;
  showToday?:boolean;
}

const CustomCalender = ({getSelectedDate,showToday=true}: ICustomCalender) => {
  const maxDateValue = getDate();

  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState(showToday?`${getDate()}`:'');
  return (
    <View>
      <CustomButton
        icon="calendar-today"
        text="Date"
        onPress={() => {
          setShow(!show);
        }}
      />
      <CustomText text={selectedValue} style={styles.text} />
      {show && (
        <Calendar
          onDayPress={value => {
            setSelectedValue(value.dateString);
            setShow(!show);
            getSelectedDate(value.dateString);
          }}
          markedDates={{
            '2023-05-01':{},
            '2023-05-02': {marked: true},
            '2023-05-03': {selected: true, marked: true, selectedColor: 'blue'},
            //[selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 17, color: AppColors.black},
});

export default CustomCalender;
