// import modules
import React from "react";
import "./Comments.css";
import { useSelector } from "react-redux";

// import components
import Comment from "../../components/Comment.js";

// import slice actions / selectors
import { selectCommentById, selectMultipleCommentsById } from "./CommentsSlice.js";
import { selectCommentsForPost } from "../newsfeed/NewsfeedSlice.js";


// ---------------- Component -----------------------
export default function Comments({postId}) {

    const commentIds = useSelector(selectCommentsForPost(postId)); // get ids for comments

    const comments = useSelector(selectMultipleCommentsById(commentIds));

    if (comments.length ===  0) {
       return <p>Be the first to comment!</p>
    }
        // use the ids to load the comments themselves
    

    return (<section className="comments-container">
       { comments.map( comment => < Comment commentId={comment.name} key={comment.name} /> )}
    </section>)
}

// YOU NEED TO FIX THE ASYNC CALL FROM COMMENTS SLICE BECAUSE
// IT DOESNT WORK CALLING THE AUTOMATIC UPDATE OF THE NEWSFEED POST COMMENTS LIST

