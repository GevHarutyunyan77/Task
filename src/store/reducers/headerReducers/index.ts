import {createSlice} from '@reduxjs/toolkit';
import {IHeader} from './types';

const initialState: IHeader = {
  active: 'all',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setActive: (state, {payload}) => {
      state.active = payload;
    },
  },
});
export const {setActive} = headerSlice.actions;
export default headerSlice.reducer;
