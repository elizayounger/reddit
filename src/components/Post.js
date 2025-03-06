// import modules:
import React, { useState, useEffect } from "react";  
import { useDispatch, useSelector } from "react-redux";
import "./Post.css";

// import local resources
import { selectPostViaId } from "../features/newsfeed/NewsfeedSlice.js";
import { addComments, loadComments } from "../features/comments/CommentsSlice.js";
import { getPostComments } from "../api/redditApi.js";
import { timeSincePost } from "../util/timeStamp.js";
import { formatNumber } from "../util/formatCommentNumber.js";

// imported components:
import Comments from "../features/comments/Comments.js";
import { ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";
import { ReactComponent as Dot } from "../resources/icons/dot-icon.svg";
import { ReactComponent as Uparrow } from "../resources/icons/up-arrow-icon.svg";
import { ReactComponent as Downarrow } from "../resources/icons/down-arrow-icon.svg";
import { ReactComponent as CommentIcon } from "../resources/icons/comment-icon-soft.svg";

export default function Post({postId: postName}) {

    const post = useSelector(selectPostViaId(postName)); // load in post to render

    // check if post has image to render
    const expression = 'https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}';
    const regex = new RegExp(expression);

    // ---------- comment loading functionality ----------
    
    const dispatch = useDispatch(); 
    const [isComments, setIsComments] = useState(false);
    
    useEffect(() => {
        if (isComments) {
            const permalink = post.permalink;
            dispatch(loadComments(permalink, dispatch)); // pass in dispatch so i can dispatch in my async thunk
        }
    }, [isComments, dispatch, post.permalink]); // Added dependencies
    
    
    // ----------------------- JSX -----------------------
    return(<article className="post-container" id={postName}>
        <div className="post">
            <header className="post-author">
                < ProfilePic className="profile-pic" />
                <p className="author-profile-name">{post.author}</p>
                < Dot className="dot-icon" />
                <p className="time-since-post" >{timeSincePost(post.created)}</p>
            </header>
            <figure>
                <h3>{post.title}</h3>
                {regex.exec(post.url) && <img src={post.url} alt={post.title} />}
            </figure>
            <footer className="vote-n-comment">
                <div className="vote">
                    <button className="up-button">
                        < Uparrow className="up" /> 
                        <p>{formatNumber(post.ups)}</p>
                    </button>
                    <button className="down-button">
                        < Downarrow className="down" /> 
                        <p>{post.downs}</p>
                    </button>
                </div>
                <button className="comment-button" onClick={()=>{setIsComments(!isComments)}}>
                    < CommentIcon className="comment" /> 
                    <p>{formatNumber(post.num_comments)}</p>
                </button>
            </footer>

            { isComments && < Comments className="comments-section" postId={post.name} /> }

        </div>
    </article>);
}