import { configureStore } from "@reduxjs/toolkit";

// import reducers here
import newsfeedReducer from "../features/newsfeed/NewsfeedSlice.js";
import commentsReducer from "../features/comments/CommentsSlice.js";

const store = configureStore({
    reducer: {
        newsfeed: newsfeedReducer,
        comments: commentsReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
