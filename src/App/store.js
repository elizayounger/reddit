import { configureStore } from "@reduxjs/toolkit";

// import reducers here
import newsfeedReducer from "../features/newsfeed/NewsfeedSlice.js";
import commentsReducer from "../features/comments/CommentsSlice.js";
import subredditsReducer from "../features/subreddits/SubredditsSlice.js";
import searchReducer from "../features/searchBar/SearchBarSlice.js";

const store = configureStore({
    reducer: {
        newsfeed: newsfeedReducer,
        comments: commentsReducer,
        subreddits: subredditsReducer,
        search: searchReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
