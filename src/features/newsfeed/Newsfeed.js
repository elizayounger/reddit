// import modules
import React, { useEffect } from "react";
import './Newsfeed.css';
import { useSelector } from "react-redux";

// import local resources
import Post from "../../components/Post.js";
import { selectPostIds, selectIsLoading, selectIsError } from "./NewsfeedSlice.js";

export default function Newsfeed() {
    const postIds = useSelector(selectPostIds);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    console.log(`postIds: ${postIds}`);
    
    return (<section className="newsfeed">

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading posts.</p>}

        {postIds.map(id => < Post postId={id} />)}
    </section>)
}