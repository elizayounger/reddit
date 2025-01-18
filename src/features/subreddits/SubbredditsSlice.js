// import modules
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import functions
import { getSubreddits } from "../../api/redditApi.js"
import { parseSubredditsToObj } from "../../api/utility.js";

// Async thunkware
export const loadSubreddits = createAsyncThunk('subreddits/loadSubreddits', async () => {
    const response = await getSubreddits();
    const parsedResponse = parseSubredditsToObj(response);
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

// Selector
export const selectSubreddits = state => {
    const subreddits = state.subreddits.subreddits;
    return Object.keys(subreddits) || [];
};

// Exports
export default subbredditsSlice.reducer;

