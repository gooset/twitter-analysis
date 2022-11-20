import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = searchbarSlice.actions;
export default searchbarSlice.reducer;

