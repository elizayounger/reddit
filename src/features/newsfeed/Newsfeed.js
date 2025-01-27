// import modules
import React, { useEffect } from "react";
import './Newsfeed.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import local resources
import Post from "../../components/Post.js";
import { selectPostIds, loadNewsfeed, getSelectedSubreddit } from "./NewsfeedSlice.js";

export default function Newsfeed() {
    const dispatch = useDispatch();
    const selectedSubreddit = useSelector(getSelectedSubreddit);
    
    useEffect(() => {
        dispatch(loadNewsfeed(selectedSubreddit));
    }, [dispatch, selectedSubreddit]);

    const postIds = useSelector(selectPostIds);
    
    return (<section className="newsfeed">
        {postIds.map(id => < Post postId={id} />)}
    </section>)
}