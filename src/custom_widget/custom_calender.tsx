import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../common/Button/custom_button';
import CustomText from '../common/Text/custom_text';
import {AppColors} from '../const/colors/colors';
import {Calendar} from 'react-native-calendars';
interface ICustomCalender {
  getDate: (category: string) => void;
}

const CustomCalender = ({getDate}: ICustomCalender) => {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
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
            getDate(value.dateString);
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
