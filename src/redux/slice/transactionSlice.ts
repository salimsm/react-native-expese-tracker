import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CategoryList} from '../../const/string/string';

interface ITransaction {
  transactionList: any[];
  totalExpense: number;
  totalBalance: number;
  income: number;
  filterDataByMonth:{}[];
  filteredTodayData: [];
  groupByCatagory: {}[];
}

const initialState: ITransaction = {
  transactionList: [],
  totalExpense: 0,
  totalBalance: 0,
  income: 20000,
  filterDataByMonth:[],
  filteredTodayData: [],
  groupByCatagory: [],
};

export const transcationSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTranscation(state, action: PayloadAction<any>) {
      const data = action.payload;

      state.transactionList = data;
      console.log();
      console.log('**********start****************');
      console.log(
        '-------------------filtered data of this month from state--------------',
      );
      const filteredData = state.transactionList.filter(
        value => value.date.slice(0, 7) === '2023-05',
      );
      state.filterDataByMonth = filteredData;
      state.totalExpense = filteredData.reduce(
        (acc, value) => acc + value.amount,
        0,
      );
      state.totalBalance = state.income - state.totalExpense;
      console.log(state);
      console.log('***********end***************');
    },
    todayTransaction(state) {
      const date = Date.now();
      const filteredTodayData = state.transactionList.filter(
        value => value.date === date,
      );

      state.groupByCatagory = CategoryList.map(category => {
        return {
          category: category,
          data: filteredTodayData.filter(data => category === data.category),
        };
      });
    },
    // catagoryTransaction(state) {
    //   const filteredTodayData = state.transactionList.filter(
    //     value => value.category === date,
    //   );

    //   state.groupByCatagory = CategoryList.map(category => {
    //     return {
    //       category: category,
    //       data: filteredTodayData.filter(data => category === data.category),
    //     };
    //   });
    // },
    // clearProduct(state) {
    //   state.cartItem = [];
    //   state.totalPrice = 0;
    //   state.totalItem = 0;
    //    },
  },
});

// Action creators are generated for each case reducer function
export const {addTranscation, todayTransaction} = transcationSlice.actions;
export default transcationSlice.reducer;
