// import modules
import { createSlice } from "@reduxjs/toolkit";
// import local functions


// Initial State
const initialState = {
    searchQuery: '',
    isLoading: false,
    isError: false,
};

// Slice Reducer
const searchSlice = createSlice({
    name: 'search',
    initialState: initialState, 
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
});


// Selectors
export const selectSearchQuery = (state) => state.searchQuery;

// Exports
export default searchSlice.reducer;
// export const { < actions Here > } = searchBar.actions;
