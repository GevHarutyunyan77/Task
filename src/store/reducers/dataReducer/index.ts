import {createSlice} from '@reduxjs/toolkit';
import {IState} from './types';
import data from '../../../DriversInfoData/data.json';

const initialState: IState = {
  data: data,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});
export const {} = dataSlice.actions;
export default dataSlice.reducer;
