import React from 'react';
import {StyleSheet} from 'react-native';
import ColumnText from './column_text';
import LinearGradient from 'react-native-linear-gradient';
import {AppColors} from '../const/colors/colors';
import RowContainer from './row_container';
import {useSelector} from 'react-redux';
import {getMonth, getMonthName, getYear} from '../utils/date';
import { CustomText } from '../common';

const BalanceCard = () => {
  const data = useSelector((state: any) => state.transaction);
  return (
    <LinearGradient
      colors={[AppColors.gradient.start, AppColors.gradient.end]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.linearGradient}>
      <CustomText
        text={`${getYear()}-${getMonthName(getMonth())}`}
        color={AppColors.white}
      />

      <CustomText text="Total Balance" color={AppColors.white} />

      <CustomText
        text={`$${data.totalBalance}`}
        color={AppColors.white}
        style={styles.large}
      />

      <RowContainer>
        <ColumnText
          title="Income"
          subTitle={data.income}
          titleStyle={styles.textColor}
          subTitleStyle={styles.textColor}
        />
        <ColumnText
          title="Expense"
          subTitle={data.totalExpense}
          titleStyle={styles.textColor}
          subTitleStyle={styles.textColor}
          style={{alignItems: 'flex-end'}}
        />
      </RowContainer>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,
    backgroundColor: 'grey',
    paddingHorizontal: 14,
    paddingVertical: 24,
    alignItems: 'center',

    marginVertical: 15,
    elevation: 10,
    shadowOpacity: 0.8,
  },
  large: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textColor: {
    color: AppColors.white,
  },
});

export default BalanceCard;
