import { configureStore } from "@reduxjs/toolkit";

// import reducers here
import newsfeedReducer from "../features/newsfeed/NewsfeedSlice.js";

const store = configureStore({
    reducer: {
        newsfeed: newsfeedReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
