// import modules
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import functions
import { getSubreddits } from "../../api/redditApi.js"
import { parseApiData } from "../../api/utility.js";

// Async thunkware
export const loadSubreddits = createAsyncThunk('subreddits/loadSubreddits', async () => {
    const response = await getSubreddits();
    return response;
});

// Initial State
const initialState = {
    subreddits: {},
    isLoading: false,
    isError: false,
    selectedSubreddit: 'pics',
}

// Slice Reducer
const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: initialState, 
    reducers: {
        changeSelectedSubreddit: (state, action) => {
            const newSubreddit = action.payload; // eg payload = 'home'
            if (newSubreddit) {
                state.selectedSubreddit = newSubreddit;
            };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSubreddits.pending, (state) => {
                state.isLoading = true;
                state.isError = false; 
            })
            .addCase(loadSubreddits.fulfilled, (state, action) => {
                state.isLoading = false;
                state.subreddits = action.payload;
            })
            .addCase(loadSubreddits.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Selectors
export const selectSubreddits = state => {
    const subreddits = state.subreddits.subreddits;
    return Object.keys(subreddits) || [];
};
export const getSelectedSubreddit = state => state.subreddits.selectedSubreddit;
export const getSelectedSubredditUrl = state => {
    const selectedSubreddit = state.subreddits.selectedSubreddit;
    const url = state.subreddits.subreddits[selectedSubreddit].url;
    return url ? url : null;
};
export const selectIsLoading = state => state.isLoading;
export const selectIsError = state => state.isError;

// Exports
export default subredditsSlice.reducer;
export const { changeSelectedSubreddit } = subredditsSlice.actions;
