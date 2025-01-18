import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const loadNewsfeed = createAsyncThunk('newsfeed/loadNewsfeed', async () => {
//     const response = await fetch()
// });


// Initial State
const initialState = {
    posts: {
        '0123': {
            authorProfilePic: "",
            authorName: "Author Profile Name",
            timePosted: "2 hours", // TODO: calculate time since post
            picCaption: "Caption for Photograph",
            picSrc: 'src/resources/post-pic-placeholder.jpg',
            picAlt: "post-pic-placeholder",
            upVotes: "4.9k",
            downVotes: "1.1k",
            commentNumber: "110"
        },
        '4567': {
            authorProfilePic: "",
            authorName: "Another Author",
            timePosted: "3 hours", // TODO: calculate time since post
            picCaption: "Another Caption",
            picSrc: 'src/resources/post-pic-placeholder.jpg',
            picAlt: "post-pic-placeholder",
            upVotes: "3.5k",
            downVotes: "800",
            commentNumber: "95"
        }
    }
};

// Slice Reducer
const newsfeedSlice = createSlice({
    name: 'newsfeed',
    initialState: initialState, 
    reducers: {
        // TODO: Add reducers
    }
});

// Selector
export const selectPostIds = state => Object.keys(state.newsfeed.posts);
export const selectPosts = state => state.newsfeed.posts;
export const selectPostViaId = (id) => (state) => {
    return state.newsfeed.posts[id];
};

// Exports
export default newsfeedSlice.reducer;
