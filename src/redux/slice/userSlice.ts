import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {monthList} from '../../const/string/string';

interface IUser {
  userId: string;
}

const initialState: IUser = {
  userId: '',
};

export const loggedInUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserToStore(state, action: PayloadAction<any>) {
      state.userId = action.payload;
    },
    removeUserFromStore(state) {
      state.userId = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {addUserToStore, removeUserFromStore} = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;
