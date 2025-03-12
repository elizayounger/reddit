// import modules
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';
// import local functions
import { getSubredditPosts } from '../../api/redditApi.js';

export const loadNewsfeed = createAsyncThunk('newsfeed/loadNewsfeed', async (selectedSubreddit) => {
    const response = await getSubredditPosts(selectedSubreddit);
    return response;
});


// Initial State
const initialState = {
    posts: {},
    isLoading: false,
    isError: false,
};

// Slice Reducer
const newsfeedSlice = createSlice({
    name: 'newsfeed',
    initialState: initialState, 
    reducers: {
        addRelatedComments: (state, action) => {
            const [[postName, commentIds]] = Object.entries(action.payload);
    
            // Ensure state.posts[postName] exists before accessing its properties
            if (!state.posts[postName]) {
                state.posts[postName] = { related_comments: [] };
            }
    
            const currentComments = state.posts[postName].related_comments || [];
            const combinedComments = new Set([...currentComments, ...commentIds]); // Combine existing and new commentIds, while removing duplicates
    
            state.posts[postName].related_comments = [...combinedComments]; // Convert Set back to array  
        }
    },
    
    extraReducers: (builder) => {
        builder
            .addCase(loadNewsfeed.pending, (state) => {
                state.isLoading = true;
                state.isError = false; 
            })
            .addCase(loadNewsfeed.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(loadNewsfeed.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});


// Selectors
const selectPostsBase = (state) => state.newsfeed.posts;

export const selectPostIds = createSelector(
    [selectPostsBase],
    (posts) => {
        const postIds = Object.keys(posts);
        return postIds.length > 0 ? postIds : [];
    }
);

export const selectPosts = createSelector(
    [selectPostsBase],
    (posts) => posts
);

export const selectPostViaId = (id) => createSelector(
    [selectPostsBase],
    (posts) => posts[id]
);

export const selectIsLoading = (state) => state.newsfeed.isLoading;
export const selectIsError = (state) => state.newsfeed.isError;

export const selectCommentsForPost = (postName) => createSelector(
    [selectPostsBase],
    (posts) => posts[postName]?.related_comments || []
);

// Exports
export default newsfeedSlice.reducer;
export const { addRelatedComments } = newsfeedSlice.actions;
