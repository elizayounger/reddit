import React from "react";
import "./Comment.css";
import {ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";

export default function Comment({id, name, timePassed, comment}) {

    return(<article id={id} className="comment">
        <header className="comment-author">
            <div className="prof-name-pic">
                < ProfilePic className="profile-pic" />
                <p className="comment-author-name">{name}</p>
            </div>
            <p className="time-since-post" >{timePassed}</p>
        </header>

        <p className="comment-txt">{comment}</p>
    </article>)
}