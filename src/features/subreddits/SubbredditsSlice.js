// import modules
import { createSlice } from "@reduxjs/toolkit";
import { asyncThunkCreator } from "@reduxjs/toolkit";
import { getSubreddits } from "../../api/redditApi.js"

// Async thunkware
export const loadSubreddits = createAsyncThunk('subreddits/loadSubreddits', async () => {
    const response = await getSubreddits();
});

// Initial State
const initialState = {

    display_name: "Home",
    title: "Home",
    display_name_prefixed: "r/Home",
    name: "t5_2qs0k",
    id: "2qs0k",
    description: "Everything home related: interior design, home improvement, architecture.\n\n**Related subreddits**\n--------------------------\n* [/r/InteriorDesign](http://www.reddit.com/r/interiordesign)\n* [/r/architecture](http://www.reddit.com/r/architecture)\n* [/r/houseporn](http://www.reddit.com/r/houseporn)\n* [/r/roomporn](http://www.reddit.com/r/roomporn)\n* [/r/designmyroom](http://www.reddit.com/r/designmyroom)",
    url: "/r/Home/"
}

// Slice Reducer
const subbredditsSlice = createSlice({
    name: 'subreddits',
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
