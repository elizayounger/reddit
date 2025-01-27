
// ----------------- PARSE SUBREDDIT DATA -----------------
export function parseApiData(type, rawApiData) {
   const parsedApiData = {};
   let header = '';
   switch (type) { // sets the object header depending on datatype being parsed
      case 'subreddit': {
         header = 'display_name';
         break;
      }
      case 'subredditPost': {
         header = 'id';
         break;
      }
   }

   for (const item of rawApiData) { // creating formatting and returning the objects
      parsedApiData[item[header]] = parseApiObject(item);
   }
   
   return parsedApiData;
}
  
function parseApiObject(type, rawApiObject) { 
   let keys = [];
   switch (type) {
      case 'subreddit': {
         keys = ['id', 'display_name', 'url', 'display_name_prefixed', 'name'];
         break;
      }
      case 'subredditPost': {
         keys = ["subreddit", "author_fullname", "saved", "clicked", "is_gallery", "title", "subreddit_name_prefixed", "hidden", "downs", "thumbnail_height", "name", "upvote_ratio", "author_flair_background_color", "ups", "thumbnail_width", "category", "gallery_data", "score", "thumbnail", "content_categories", "subreddit_type", "created", "domain", "allow_live_comments", "likes", "url_overridden_by_dest", "over_18", "subreddit_id", "id", "author", "num_comments", "send_replies", "permalink", "url", "subreddit_subscribers", "created_utc", "media", "is_video"];
         break;
      }
      default: 
         return null;
   };
   const object = {}
   for (const key of keys) {
      object[key] = rawApiObject[key];
   }
   return object;
};

// ----------------- PARSE SUBREDDIT POST DATA -----------------
