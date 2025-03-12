// import modules
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';
// import functions
import { getSubreddits } from "../../api/redditApi.js"

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
export const selectSubreddits = createSelector(
    state => state.subreddits.subreddits,
    (subreddits) => Object.keys(subreddits) || []
);

export const getSelectedSubreddit = state => state.subreddits.selectedSubreddit;

export const getSelectedSubredditUrl = createSelector(
  state => state.subreddits.selectedSubreddit,         // Input selector 1: selectedSubreddit
  state => state.subreddits.subreddits,                // Input selector 2: subreddits object
  (selectedSubreddit, subreddits) => {
    // Result function: Compute the URL from the selected subreddit
    const url = subreddits[selectedSubreddit]?.url;
    return url ? url : null;  // Return the URL or null if not found
  }
);

export const selectIsLoading = state => state.isLoading;
export const selectIsError = state => state.isError;

// Exports
export default subredditsSlice.reducer;
export const { changeSelectedSubreddit } = subredditsSlice.actions;
