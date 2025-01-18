// import modules
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import functions
import { getSubreddits } from "../../api/redditApi.js"
import { parseSubreddits } from "../../api/utility.js";

// Async thunkware
export const loadSubreddits = createAsyncThunk('subreddits/loadSubreddits', async () => {
    const response = await getSubreddits();
    const parsedResponse = parseSubreddits(response);
    console.log(`parsedSubreddits: ${parsedResponse}`)
    return parsedResponse;
});

// Initial State
const initialState = {
    subreddits: {},
    isLoading: false,
    isError: false
}

// Slice Reducer
const subbredditsSlice = createSlice({
    name: 'subreddits',
    initialState: initialState, 
    reducers: {
        // TODO: Add reducers
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSubreddits.pending, (state) => {
                state.isLoading = true;
                state.isError = false; // Reset error state on new load
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

// Selector
export const selectPostIds = state => Object.keys(state.newsfeed.posts);
export const selectPosts = state => state.newsfeed.posts;
export const selectPostViaId = (id) => (state) => {
    return state.newsfeed.posts[id];
};

// Exports
export default newsfeedSlice.reducer;
