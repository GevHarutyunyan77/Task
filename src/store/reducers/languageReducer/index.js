import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    language:'hy'
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state,{payload}) => {
            state.language = payload
        },

    },
});
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer
