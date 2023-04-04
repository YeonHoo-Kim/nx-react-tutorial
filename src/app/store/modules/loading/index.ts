import { ReactNode } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type loadingProps = {
  mainMsg?: string;
  subMsg?: string;
  msgChild?: ReactNode;
};

export interface LoadingState {
  value: boolean;
  data?: loadingProps;
}

const initialState: LoadingState = {
  value: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<loadingProps | undefined>) => {
      state.value = true;
      if (action.payload) state.data = action.payload;
    },
    setMessage: (state, action: PayloadAction<loadingProps>) => {
      state.data = action.payload;
    },
    finish: (state) => {
      state.value = false;
      state.data = {
        ...state.data,
        msgChild: undefined,
        mainMsg: '',
        subMsg: '',
      };
    },
  },
});

// action creators
export const { start, setMessage, finish } = loadingSlice.actions;
// reducer
export default loadingSlice.reducer;
