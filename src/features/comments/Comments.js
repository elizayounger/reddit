// import modules
import React from "react";
import "./Comments.css";
import { useSelector } from "react-redux";

// import components
import Comment from "../../components/Comment.js";

// import slice actions / selectors
import { selectCommentIds, selectAllComments } from "./CommentsSlice.js";


// ---------------- Component -----------------------
export default function Comments({postId}) {

    const commentIds = useSelector(selectCommentIds(postId));
    if (!commentIds) {
        return <p>Be the first to comment!</p>
    }

    return (<section className="comments-container">
        { commentIds.map( commentId => < Comment commentId={commentId} /> )}
    </section>)
}