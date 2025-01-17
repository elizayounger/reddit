import React, { useState, useEffect } from "react";
import "./Post.css";
import Comments from "../features/comments/Comments";
import {ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";
import {ReactComponent as Dot } from "../resources/icons/dot-icon.svg";
import {ReactComponent as Uparrow } from "../resources/icons/up-arrow-icon.svg";
import {ReactComponent as Downarrow } from "../resources/icons/down-arrow-icon.svg";
import {ReactComponent as CommentIcon } from "../resources/icons/comment-icon-soft.svg";

export default function Post() {

    const [ isComments, setIsComments ] = useState(false);
    useEffect(() => {
        if (isComments) {
            // TODO: dispatch(loadPostComments(postId));
        }
    }, [isComments]);

    const post = { // TODO: outsource this to redux
        postId: "0123",
        authorProfilePic: < ProfilePic className="profile-pic" />,
        authorName: "Author Profile Name",
        timePosted: "2 hours", // TODO: calculate time since post
        picCaption: "Caption for Photograph",
        picSrc: 'src/resources/post-pic-placeholder.jpg',
        picAlt: "post-pic-placeholder",
        upVotes: "4.9k",
        downVotes: "1.1k",
        commentNumber: "110"
    };
    
    return(<article className="post-container">

        <div className="post">

            <header className="post-author">
                {post.authorProfilePic}
                <p className="author-profile-name">{post.authorName}</p>
                < Dot className="dot-icon" />
                <p className="time-since-post" >{post.timePosted}</p>
            </header>

            <figure>
                <h3>{post.picCaption}</h3>
                <img src="post-pic-placeholder.jpg" alt={post.picAlt} />
            </figure>
        
            <footer className="vote-n-comment">
                <div className="vote">
                    <button className="up-button">
                        < Uparrow className="up" /> 
                        <p>{post.upVotes}</p>
                    </button>
                    <button className="down-button">
                        < Downarrow className="down" /> 
                        <p>{post.downVotes}</p>
                    </button>
                </div>

                <button className="comment-button" onClick={()=>{setIsComments(!isComments)}}>
                    < CommentIcon className="comment" /> 
                    <p>{post.commentNumber}</p>
                </button>
            </footer>

            { isComments && < Comments className="comments-section" postId={post.postId} /> }

        </div>

    </article>);
}