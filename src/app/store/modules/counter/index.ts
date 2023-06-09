import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../..';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Other code such as selectors can be set with using the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

// action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// reducer
export default counterSlice.reducer;
