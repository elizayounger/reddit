import { parseApiData } from "./utility.js";

export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
   const response = await fetch(`${API_ROOT}${subreddit}.json`);
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

   return json[1].data.children.map((subreddit) => subreddit.data);
};

// testing
// async function getResponse() {
//     const response = await getSubreddits();
//     console.log(response);
// }

// getResponse();
