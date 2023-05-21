import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ITransaction {
  transactionList: any[];
  totalExpense: number;
  totalBalance: number,
  income:number;
  
  //   totalPrice: number;
}

const initialState: ITransaction = {
  transactionList: [],
  totalExpense: 0,
  totalBalance: 0,
  income:20000,

};

export const transcationSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTranscation(state, action: PayloadAction<any>) {
      const data = action.payload;
      
      state.transactionList=data;
      console.log();
      console.log('**********start****************');
      console.log('-------------------filtered data from state--------------');      
      const filteredData = state.transactionList.filter(value=>value.date.slice(0,7)==='2023-05');
      state.totalExpense = filteredData.reduce((acc,value)=> acc+value.amount,0);
      state.totalBalance=state.income-state.totalExpense;
      console.log(state);
      console.log('***********end***************');
      

    },
    // removeProduct(state, action: PayloadAction<any>) {
    //   const product = action.payload;
    //   state.cartItem = state.cartItem.filter(item => item.id !== product.id);
    //   state.totalItem -= product.itemQty;
    //   state.totalPrice -= product.itemTotalPrice;
    // },
    // clearProduct(state) {
    //   state.cartItem = [];
    //   state.totalPrice = 0;
    //   state.totalItem = 0;
//    },
  },
});

// Action creators are generated for each case reducer function
export const {addTranscation} = transcationSlice.actions;
export default transcationSlice.reducer;
