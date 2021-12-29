import { createSlice } from '@reduxjs/toolkit';
import { Counter } from './type';
import { useInjectReducer } from 'redux-injectors';

const initialState: Counter = { amount: 1, value: 0 };

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += state.amount;
    },
    decrement(state) {
      state.value -= state.amount;
    },
    changeAmount(state, action) {
      state.amount = action.payload;
    },
  },
});

export const useCountPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
