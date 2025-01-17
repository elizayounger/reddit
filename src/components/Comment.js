import React from "react";
import {ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";

export default function Comment({}) {
    return(<div className="comment">

        <header className="comment-author">
            < ProfilePic className="profile-pic" />
            <p className="author-profile-name"></p>
            <p className="time-since-post" ></p>
        </header>

    </div>)
}