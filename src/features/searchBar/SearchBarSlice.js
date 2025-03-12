// import modules
import { createSlice } from "@reduxjs/toolkit";
// import local functions


// Initial State
const initialState = {
    search: [],
    isLoading: false,
    isError: false,
};

// Slice Reducer
const newsfeedSlice = createSlice({
    name: 'search',
    initialState: initialState, 
    reducers: {},
});


// Selectors


// Exports
export default search.reducer;
// export const { < actions Here > } = searchBar.actions;
