// import modules
import { createSlice } from "@reduxjs/toolkit";
// import local functions


// Initial State
const initialState = {
    searchQuery: [],
    isLoading: false,
    isError: false,
};

// Slice Reducer
const searchSlice = createSlice({
    name: 'search',
    initialState: initialState, 
    reducers: {},
});


// Selectors


// Exports
export default searchSlice.reducer;
// export const { < actions Here > } = searchBar.actions;
