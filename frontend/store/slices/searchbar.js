import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false
};

const searchbar = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        setIsLoading(state, action){
            state.isLoading = action.payload;
        }
    },
})

export const searchbarActions =  searchbar.actions;
export default searchbar.reducer;