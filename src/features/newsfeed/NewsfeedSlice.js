// import modules
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import local functions
import { getSubredditPosts } from '../../api/redditApi.js';
import { parseApiData } from '../../api/utility.js';

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
            console.log(`postname: ${postName}, commentIds: ${commentIds}`);
            
            if (!state.posts[postName]) {
                // Initialize post entry if missing
                state.posts[postName] = { related_comments: [] };
            }

            const currentComments = state.posts[postName].related_comments;
            
            // Combine existing and new commentIds, while removing duplicates
            const combinedComments = new Set([...currentComments, ...commentIds]);
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
export const selectPostIds = (state) => {
    const posts = state.newsfeed.posts;
    const postIds = Object.keys(state.newsfeed.posts);
    if (postIds.length > 0) {
        return postIds;
    } else {
        return [];
    }
};
export const selectPosts = state => state.newsfeed.posts;
export const selectPostViaId = (id) => (state) => {
    return state.newsfeed.posts[id];
};
export const selectIsLoading = state => state.newsfeed.isLoading;
export const selectIsError = state => state.newsfeed.isError;
export const selectCommentsForPost = (postName) => (state) => {
    return state.comments.comments[postName]?.comments || [];
};


// Exports
export default newsfeedSlice.reducer;
export const { addRelatedComments } = newsfeedSlice.actions;
// TODO: remember to export the actions when they come
