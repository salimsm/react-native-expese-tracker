import {configureStore} from '@reduxjs/toolkit';
import transactionSlice from '../slice/transactionSlice';
import loggedInUserSlice from '../slice/userSlice';

export const store = configureStore({
  reducer: {
    transaction: transactionSlice,
    user: loggedInUserSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
