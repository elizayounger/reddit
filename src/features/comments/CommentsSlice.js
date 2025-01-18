import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
    comments: {        
        '0123': { // postIds
            commentId: {
                commentId: '0123-001',
                relatedPost: '0123',
                name: 'Zulu Masson',
                timePassed: "2 hours",
                comment: "you smell"
            }, 
            commentId2: {
                commentId: '0123-002',
                relatedPost: '0123',
                name: 'Zulu Masson',
                timePassed: "2 hours",
                comment: "no you smell"
            }
        },
        '4567': { // postIds
            commentId3: {
                commentId: '4567-001',
                relatedPost: '4567',
                name: 'Zulu Masson',
                timePassed: "2 hours",
                comment: "you are the smelliest"
            }
        }
    },
    isLoading: false,
    isError: false
};

// Slice Reducer
const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialState, 
    reducers: {
        // TODO: Add reducers
    }
});

// Selector
export const selectCommentIds = (postId) => (state) => {
    const postComments = state.comments.comments[String(postId)];
    return postComments ? Object.keys(postComments) : [];
};
export const selectCommentById = (commentId) => (state) => {
    return state.comments.comments[commentId];
}


// Exports
export default commentsSlice.reducer;
// TODO: remember to export the actions when they come
