import React from "react";
import './Newsfeed.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Post from "../../components/Post";
import { selectPostIds } from "./NewsfeedSlice";

// useEffect(() => {
//     dispatch(loadNewsfeed());
// }, [dispatch]);

export default function Newsfeed() {
    // const dipatch = useDispatch();
    // TODO: dispatch(loadNewsfeed());

    const postIds = useSelector(selectPostIds);
    
    return (<section className="newsfeed">
        {postIds.map(id => < Post postId={id} />)}
    </section>)
}