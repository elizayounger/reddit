export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
   const response = await fetch(`${API_ROOT}${subreddit}.json`);
   const json = await response.json();

   return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => { // retrieves all the subreddits available from api
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
};


export const getPostComments = async (permalink) => {
   const response = await fetch(`${API_ROOT}${permalink}.json`);
   const json = await response.json();

   return json[1].data.children.map((subreddit) => subreddit.data);
};

// {
    // display_name: "Home",
    // title: "Home",
    // display_name_prefixed: "r/Home",
    // name: "t5_2qs0k",
    // created: 1232850357,
    // id: "2qs0k",
    // description: "Everything home related: interior design, home improvement, architecture.\n\n**Related subreddits**\n--------------------------\n* [/r/InteriorDesign](http://www.reddit.com/r/interiordesign)\n* [/r/architecture](http://www.reddit.com/r/architecture)\n* [/r/houseporn](http://www.reddit.com/r/houseporn)\n* [/r/roomporn](http://www.reddit.com/r/roomporn)\n* [/r/designmyroom](http://www.reddit.com/r/designmyroom)",
    // url: "/r/Home/",
    // created_utc: 1232850357,
// }

// {
//     user_flair_background_color: null,
//     submit_text_html: null,
//     restrict_posting: true,
//     user_is_banned: null,
//     free_form_reports: true,
//     wiki_enabled: false,
//     user_is_muted: null,
//     user_can_flair_in_sr: null,
//     display_name: "Home",
//     header_img: null,
//     title: "Home",
//     allow_galleries: true,
//     icon_size: null,
//     primary_color: "",
//     active_user_count: null,
//     icon_img: "",
//     display_name_prefixed: "r/Home",
//     accounts_active: null,
//     public_traffic: false,
//     subscribers: 273550,
//     user_flair_richtext: [
//     ],
//     videostream_links_count: 0,
//     name: "t5_2qs0k",
//     quarantine: false,
//     hide_ads: false,
//     prediction_leaderboard_entry_type: 2,
//     emojis_enabled: false,
//     advertiser_category: "",
//     public_description: "",
//     comment_score_hide_mins: 0,
//     allow_predictions: false,
//     user_has_favorited: null,
//     user_flair_template_id: null,
//     community_icon: "",
//     banner_background_image: "",
//     original_content_tag_enabled: false,
//     community_reviewed: true,
//     submit_text: "",
//     description_html: "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Everything home related: interior design, home improvement, architecture.&lt;/p&gt;\n\n&lt;h2&gt;&lt;strong&gt;Related subreddits&lt;/strong&gt;&lt;/h2&gt;\n\n&lt;ul&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/interiordesign\"&gt;/r/InteriorDesign&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/architecture\"&gt;/r/architecture&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/houseporn\"&gt;/r/houseporn&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/roomporn\"&gt;/r/roomporn&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"http://www.reddit.com/r/designmyroom\"&gt;/r/designmyroom&lt;/a&gt;&lt;/li&gt;\n&lt;/ul&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
//     spoilers_enabled: true,
//     comment_contribution_settings: {
//       allowed_media_types: null,
//     },
//     allow_talks: false,
//     header_size: null,
//     user_flair_position: "right",
//     all_original_content: false,
//     has_menu_widget: false,
//     is_enrolled_in_new_modmail: null,
//     key_color: "",
//     can_assign_user_flair: true,
//     created: 1232850357,
//     wls: 6,
//     show_media_preview: true,
//     submission_type: "any",
//     user_is_subscriber: null,
//     allowed_media_in_comments: [
//     ],
//     allow_videogifs: true,
//     should_archive_posts: false,
//     user_flair_type: "text",
//     allow_polls: true,
//     collapse_deleted_comments: false,
//     emojis_custom_size: null,
//     public_description_html: null,
//     allow_videos: true,
//     is_crosspostable_subreddit: false,
//     suggested_comment_sort: null,
//     should_show_media_in_comments_setting: true,
//     can_assign_link_flair: true,
//     accounts_active_is_fuzzed: false,
//     allow_prediction_contributors: false,
//     submit_text_label: "",
//     link_flair_position: "right",
//     user_sr_flair_enabled: null,
//     user_flair_enabled_in_sr: false,
//     allow_discovery: true,
//     accept_followers: true,
//     user_sr_theme_enabled: true,
//     link_flair_enabled: true,
//     disable_contributor_requests: false,
//     subreddit_type: "public",
//     notification_level: null,
//     banner_img: "",
//     user_flair_text: null,
//     banner_background_color: "",
//     show_media: true,
//     id: "2qs0k",
//     user_is_contributor: null,
//     over18: false,
//     header_title: "",
//     description: "Everything home related: interior design, home improvement, architecture.\n\n**Related subreddits**\n--------------------------\n* [/r/InteriorDesign](http://www.reddit.com/r/interiordesign)\n* [/r/architecture](http://www.reddit.com/r/architecture)\n* [/r/houseporn](http://www.reddit.com/r/houseporn)\n* [/r/roomporn](http://www.reddit.com/r/roomporn)\n* [/r/designmyroom](http://www.reddit.com/r/designmyroom)",
//     submit_link_label: "",
//     user_flair_text_color: null,
//     restrict_commenting: false,
//     user_flair_css_class: null,
//     allow_images: true,
//     lang: "en",
//     url: "/r/Home/",
//     created_utc: 1232850357,
//     banner_size: null,
//     mobile_banner_image: "",
//     user_is_moderator: null,
//     allow_predictions_tournament: false,
//   }