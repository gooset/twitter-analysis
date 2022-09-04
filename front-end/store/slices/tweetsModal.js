import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
}

const tweetsModal = createSlice({
    name: 'tweetsModal',
    initialState,
    reducers: {
        isOpen(state, action){
            state.isOpen = action.payload;
        }
    },
})

export const tweetsModalActions = tweetsModal.actions;
export default tweetsModal.reducer;