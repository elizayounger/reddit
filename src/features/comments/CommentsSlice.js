// import modules
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import local
import { getPostComments } from "../../api/redditApi.js";
import { addRelatedComments } from "../newsfeed/NewsfeedSlice.js";
import { useDispatch } from "react-redux";

// ASYNC THUNKS
export const loadComments = createAsyncThunk('comments/loadComments', async (permalink) => {
    const response = await getPostComments(permalink);
    // const keys = Object.keys(response);
    // dispatch comments keys to newsfeed slice
    // const postName = response[keys[0]].parent_id;
    // const dispatch = useDispatch();
    // dispatch(addRelatedComments({[postName]: keys}));

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
                console.log(`(in commentsSlice) new comments: ${newComments}`)
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
export const selectMultipleCommentsById = (commentIds) => (state) => {
    return commentIds.map(commentId => state.comments.comments[commentId]) || [];
};



// Exports
export default commentsSlice.reducer;
// TODO: remember to export the actions when they come
export const { addComments } = commentsSlice.actions;