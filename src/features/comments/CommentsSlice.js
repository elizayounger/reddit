// import modules
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

// import local
import { getPostComments } from "../../api/redditApi.js";

// ASYNC THUNKS
export const loadComments = createAsyncThunk('comments/loadComments', async (permalink, { dispatch }) => {
    const response = await getPostComments(permalink);

    const keys = Object.keys(response); // dispatch comments keys to newsfeed slice
    const postName = response[keys[0]].parent_id;
    dispatch({ type: 'newsfeed/addRelatedComments', payload: {[postName]: keys} });

    return response;
});

// Initial State
const initialState = {
    comments: {},
    isLoading: false,
    isError: false
};

// Slice Reducer
const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.pending, (state) => {
                state.isLoading = true;
                state.isError = false; 
            })
            .addCase(loadComments.fulfilled, (state, action) => {
                state.isLoading = false;
                const newComments = action.payload;
                state.comments = {...state.comments, ...newComments};
            })
            .addCase(loadComments.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Selector
export const selectCommentById = (commentId) => (state) => {
    return state.comments.comments[commentId] || [];
}
export const selectMultipleCommentsById = (commentIds = []) => (state) => {
    if (!Array.isArray(commentIds)) {
        console.warn("selectMultipleCommentsById received a non-array argument:", commentIds);
        return [];
    }
    return commentIds.map(commentId => state.comments.comments[commentId]).filter(comment => comment);
};


// Exports
export default commentsSlice.reducer;
// TODO: remember to export the actions when they come
export const { addComments } = commentsSlice.actions;
