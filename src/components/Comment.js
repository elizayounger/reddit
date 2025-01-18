import React from "react";
import "./Comment.css";
import {ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";

export default function Comment({commentId}) {

    const comment = {
        commentId: '0123',
        name: 'Zulu Masson',
        timePassed: "2 hours",
        comment: "you smell"
    }

    return(<article id={commentId} className="comment">
        <header className="comment-author">
            <div className="prof-name-pic">
                < ProfilePic className="profile-pic" />
                <p className="comment-author-name">{comment.name}</p>
            </div>
            <p className="time-since-post" >{comment.timePassed}</p>
        </header>

        <p className="comment-txt">{comment.comment}</p>
    </article>)
}