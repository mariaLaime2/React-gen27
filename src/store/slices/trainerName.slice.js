import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
    name: 'trainer',
    initialState: null, // ""
    reducers: {
       setTrainerG:(state,action)=> action.payload
       
    }
})

export const {setTrainerG} = mySlice.actions;

export default mySlice.reducer;
