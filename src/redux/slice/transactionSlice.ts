import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {monthList} from '../../const/string/string';

interface ITransaction {
  transactionList: any[];
  totalExpense: number;
  totalBalance: number;
  income: number;
  filterDataByMonth: {}[];
  groupByCatagory: {}[];
  mothlyData: {}[];
}

const initialState: ITransaction = {
  transactionList: [],
  totalExpense: 0,
  totalBalance: 0,
  income: 20000,
  filterDataByMonth: [],
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
      
      // console.log(data);

      state.transactionList = data;
      console.log(
        '-------------------filtered data of this month from state--------------',
      );

      const d = new Date();
      // filter data which return the list of transcation done in current month
      const filteredData = state.transactionList.filter(
        value =>
          value.date.slice(0, 7) ===
          `${d.getFullYear()}-${monthList[d.getMonth()]}`,
      );
      //filterDataByMonth = transcation of this month only
      state.filterDataByMonth = filteredData;

      // calculate total expense of current month
      state.totalExpense = filteredData.reduce(
        (acc, value) => acc + value.amount,
        0,
      );
      state.totalBalance = state.income - state.totalExpense;
    },
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
export const {addTranscation, catagoryByMonth} = transcationSlice.actions;
export default transcationSlice.reducer;
