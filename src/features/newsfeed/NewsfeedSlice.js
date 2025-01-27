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
        // TODO: Add reducers
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
export const selectIsLoading = state => state.isLoading;
export const selectIsError = state => state.isError;


// Exports
export default newsfeedSlice.reducer;
// TODO: remember to export the actions when they come

// {
//     '1ia83dw': {
//         subreddit: 'pics',
//         author_fullname: 't2_a22v0mll',
//         saved: false,
//         clicked: false,
//         is_gallery: true,
//         title: 'Turkish photographer Uğur Gallenkuş merges contrasting worlds to reveal stark global disparities.',
//         subreddit_name_prefixed: 'r/pics',
//         hidden: false,
//         downs: 0,
//         thumbnail_height: 140,
//         name: 't3_1ia83dw',
//         upvote_ratio: 0.97,
//         author_flair_background_color: null,
//         ups: 21930,
//         thumbnail_width: 140,
//         category: null,
//         gallery_data: { items: [Array] },
//         score: 21930,
//         thumbnail: 'https://b.thumbs.redditmedia.com/GZARWOPJjfMUQs4KRS-_ldnVG1tTnqauY7t1QGaNCeg.jpg',
//         content_categories: [ 'photography' ],
//         subreddit_type: 'public',
//         created: 1737874261,
//         domain: 'reddit.com',
//         allow_live_comments: false,
//         likes: null,
//         url_overridden_by_dest: 'https://www.reddit.com/gallery/1ia83dw',
//         over_18: false,
//         subreddit_id: 't5_2qh0u',
//         id: '1ia83dw',
//         author: 'Thapee',
//         num_comments: 149,
//         send_replies: true,
//         permalink: '/r/pics/comments/1ia83dw/turkish_photographer_uğur_gallenkuş_merges/',
//         url: 'https://www.reddit.com/gallery/1ia83dw',
//         subreddit_subscribers: 31349982,
//         created_utc: 1737874261,
//         media: null,
//         is_video: false
//         },
//     '1ib2j97': {
//         subreddit: 'pics',
//         author_fullname: 't2_15rh4b50dq',
//         saved: false,
//         clicked: false,
//         title: 'The first quote as you enter the Holocaust Museum in Berlin.',
//         subreddit_name_prefixed: 'r/pics',
//         hidden: false,
//         downs: 0,
//         thumbnail_height: 140,
//         name: 't3_1ib2j97',
//         upvote_ratio: 0.97,
//         author_flair_background_color: null,
//         ups: 135,
//         thumbnail_width: 140,
//         category: null,
//         score: 135,
//         thumbnail: 'https://b.thumbs.redditmedia.com/jMyrUM9vtu4CUjG3s_RENlh_GfJ72ICGJ6IYNZnmw0c.jpg',
//         content_categories: ['photography'],
//         subreddit_type: 'public',
//         created: 1737962739,
//         domain: 'i.redd.it',
//         allow_live_comments: false,
//         likes: null,
//         url_overridden_by_dest: 'https://i.redd.it/jki2xvlinhfe1.jpeg',
//         over_18: false,
//         subreddit_id: 't5_2qh0u',
//         id: '1ib2j97',
//         author: 'chiwis111',
//         num_comments: 2,
//         send_replies: true,
//         permalink: '/r/pics/comments/1ib2j97/the_first_quote_as_you_enter_the_holocaust_museum/',
//         url: 'https://i.redd.it/jki2xvlinhfe1.jpeg',
//         subreddit_subscribers: 31349982,
//         created_utc: 1737962739,
//         media: null,
//         is_video: false
//       }
// }