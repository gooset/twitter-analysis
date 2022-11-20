import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const tweetsModalSlice = createSlice({
  name: 'tweetsModal',
  initialState,
  reducers: {
    setModalOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setModalOpen } = tweetsModalSlice.actions;
export default tweetsModalSlice.reducer;

