import { parseApiData } from "./utility.js";

export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
   const subredditUrl = '/r/'+subreddit+'/';
   const response = await fetch(`${API_ROOT}${subredditUrl}.json`);
   const json = await response.json();
   // now parse data
   const jsonParsed = json.data.children.map((post) => post.data);
   const jsonParsed2 = parseApiData('subredditPost', jsonParsed);
   return jsonParsed2;
};

export const getSubreddits = async () => { // retrieves all the subreddits available from api
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    const parsedJson = json.data.children.map((subreddit) => subreddit.data);
    const secondParse = parseApiData('subreddit', parsedJson);
    return secondParse;
};

export const getPostComments = async (permalink) => {
   const response = await fetch(`${API_ROOT}${permalink}.json`);
   const json = await response.json();
   const parsedJson = json[1].data.children.map((subreddit) => subreddit.data);
   const secondParse = parseApiData('comments', parsedJson);
   return secondParse;
};

// testing
// async function getResponse() {
//     const response = await getPostComments('/r/pics/comments/1ibdgif/my_grandfather_middle_and_the_two_men_who_stood/');
//     const parsedData = parseApiData('comments', response);
//     console.log(parsedData);
// }

// getResponse();


// '1ibdgif': {
//    subreddit: 'pics',
//    author_fullname: 't2_dizja',
//    saved: false,
//    clicked: false,
//    title: 'My grandfather (middle) and the two men who stood in front of and behind him in line at Auschwitz',
//    subreddit_name_prefixed: 'r/pics',
//    hidden: false,
//    downs: 0,
//    thumbnail_height: 104,
//    name: 't3_1ibdgif',
//    upvote_ratio: 0.98,
//    author_flair_background_color: null,
//    ups: 13433,
//    thumbnail_width: 140,
//    category: null,
//    score: 13433,
//    thumbnail: 'https://b.thumbs.redditmedia.com/LZhzbwa0XUcjyerXM43vQr4DZEcDh3GlJ25oYtpe4qw.jpg',
//    content_categories: [
//      'photography'
//    ],
//    subreddit_type: 'public',
//    created: 1737996024,
//    domain: 'i.redd.it',
//    allow_live_comments: false,
//    likes: null,
//    url_overridden_by_dest: 'https://i.redd.it/2wvb23khekfe1.jpeg',
//    over_18: false,
//    subreddit_id: 't5_2qh0u',
//    id: '1ibdgif',
//    author: 'sjgarizona98',
//    num_comments: 132,
//    send_replies: true,
//    permalink: '/r/pics/comments/1ibdgif/my_grandfather_middle_and_the_two_men_who_stood/',
//    url: 'https://i.redd.it/2wvb23khekfe1.jpeg',
//    subreddit_subscribers: 31350441,
//    created_utc: 1737996024,
//    media: null,
//    is_video: false
//  }