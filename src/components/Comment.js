import React from "react";
import { useSelector } from "react-redux";

// import local resources
import "./Comment.css";
import {ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";
// IMPORT SELECT COMMENT BY ID SELECTOR 
import { selectCommentById } from "../features/comments/CommentsSlice.js";


export default function Comment({commentId}) {

    // USE SELECTOR TO GET COMMENT'S DATA
    const comment = useSelector(selectCommentById(commentId));

    return(<article id={comment.name} className="comment">
        <header className="comment-author">
            <div className="prof-name-pic">
                < ProfilePic className="profile-pic" />
                <p className="comment-author-name">{comment.author}</p>
            </div>
            <p className="time-since-post" >{comment.created}</p>
        </header>

        <p className="comment-txt">{comment.body}</p>
    </article>)
}