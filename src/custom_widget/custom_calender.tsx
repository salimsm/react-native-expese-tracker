import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '../const/colors/colors';
import {Calendar} from 'react-native-calendars';
import {getDate} from '../utils/date';
import { CustomButton, CustomText } from '../common';

interface ICustomCalender {
  getSelectedDate: (category: string) => void;
  showToday?: boolean;
  mark?: {};
}

const CustomCalender = ({
  getSelectedDate,
  showToday = true,
  mark,
}: ICustomCalender) => {
  const maxDateValue = getDate();

  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    showToday ? `${getDate()}` : '',
  );
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
          markedDates={mark}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 17, color: AppColors.black},
});

export default CustomCalender;
