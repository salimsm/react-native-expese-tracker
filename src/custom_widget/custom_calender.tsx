import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../common/Button/custom_button';
import CustomText from '../common/Text/custom_text';
import {AppColors} from '../const/colors/colors';
import {Calendar} from 'react-native-calendars';
import { getDate } from '../utils/date';

interface ICustomCalender {
  getSelectedDate: (category: string) => void;
}

const CustomCalender = ({getSelectedDate}: ICustomCalender) => {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState(`${getDate()}`);
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
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 17, color: AppColors.black},
});

export default CustomCalender;
