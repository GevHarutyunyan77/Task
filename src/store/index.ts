import {configureStore} from '@reduxjs/toolkit';

import headerSlice from './reducers/headerReducers';
import dataSlice from './reducers/dataReducer';

export const store = configureStore({
  reducer: {
    headerSlice,
    dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
