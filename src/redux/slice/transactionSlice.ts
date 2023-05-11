import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CategoryList, monthList} from '../../const/string/string';

interface ITransaction {
  transactionList: any[];
  totalExpense: number;
  totalBalance: number;
  income: number;
  filterDataByMonth: {}[];
  filteredTodayData: [];
  groupByCatagory: {}[];
  mothlyData: {}[];
}

const initialState: ITransaction = {
  transactionList: [],
  totalExpense: 0,
  totalBalance: 0,
  income: 20000,
  filterDataByMonth: [],
  filteredTodayData: [],
  groupByCatagory: [],
  mothlyData: [],
};

export const transcationSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTranscation(state, action: PayloadAction<any>) {
      const data = action.payload.sort((a: any, b: any) => {
        return b.date.localeCompare(a.date);
      });

      state.transactionList = data;
      console.log(
        '-------------------filtered data of this month from state--------------',
      );
      const d = new Date();
      const filteredData = state.transactionList.filter(
        value =>
          value.date.slice(0, 7) ===
          `${d.getFullYear()}-${monthList[d.getMonth()]}`,
      );
      state.filterDataByMonth = filteredData;
      state.totalExpense = filteredData.reduce(
        (acc, value) => acc + value.amount,
        0,
      );
      state.totalBalance = state.income - state.totalExpense;
    },
    // todayTransaction(state) {
    //   const date = Date.now();
    //   const filteredTodayData = state.transactionList.filter(
    //     value => value.date === date,
    //   );
    //   console.log('TodayTranscation');
    //   console.log(filteredTodayData);

    //   state.groupByCatagory = CategoryList.map(category => {
    //     return {
    //       category: category,
    //       data: filteredTodayData.filter(data => category === data.category),
    //     };
    //   });
    //   console.log(state.groupByCatagory);

    // },
    catagoryByMonth(state) {
      state.mothlyData = monthList.map(month => {
        return {
          month: month,
          total: state.transactionList.reduce((acc, value) => {
            console.log(value.amount);
            if (value.date.slice(5, 7) === month) {
              return acc + value.amount;
            }
            return acc;
          }, 0),
        };
      });
      console.log('monthly data from slice');
      console.log(state.mothlyData);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addTranscation, catagoryByMonth} =
  transcationSlice.actions;
export default transcationSlice.reducer;
