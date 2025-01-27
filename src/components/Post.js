// import modules:
import React, { useState, useEffect } from "react";  
import { useDispatch, useSelector } from "react-redux";
import "./Post.css";

// import redux actions
import { selectPostViaId } from "../features/newsfeed/NewsfeedSlice.js";

// imported components:
import Comments from "../features/comments/Comments.js";
import { ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";
import { ReactComponent as Dot } from "../resources/icons/dot-icon.svg";
import { ReactComponent as Uparrow } from "../resources/icons/up-arrow-icon.svg";
import { ReactComponent as Downarrow } from "../resources/icons/down-arrow-icon.svg";
import { ReactComponent as CommentIcon } from "../resources/icons/comment-icon-soft.svg";


export default function Post({postId}) {

    const post = useSelector(selectPostViaId(postId));
    const expression = 'https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}';
    const regex = new RegExp(expression);

    const [ isComments, setIsComments ] = useState(false);
    useEffect(() => {
        if (isComments) {
            // TODO: dispatch(loadPostComments(postId));
        }
    }, [isComments]);
        
    return(<article className="post-container" id={postId}>
        <div className="post">
            <header className="post-author">
                < ProfilePic className="profile-pic" />
                <p className="author-profile-name">{post.author}</p>
                < Dot className="dot-icon" />
                <p className="time-since-post" >{post.created}</p>
            </header>
            <figure>
                <h3>{post.title}</h3>
                {regex.exec(post.thumbnail) && <img src={post.thumbnail} alt={post.title} />}
                
            </figure>
            <footer className="vote-n-comment">
                <div className="vote">
                    <button className="up-button">
                        < Uparrow className="up" /> 
                        <p>{post.ups}</p>
                    </button>
                    <button className="down-button">
                        < Downarrow className="down" /> 
                        <p>{post.downs}</p>
                    </button>
                </div>
                <button className="comment-button" onClick={()=>{setIsComments(!isComments)}}>
                    < CommentIcon className="comment" /> 
                    <p>{post.num_comments}</p>
                </button>
            </footer>

            { isComments && < Comments className="comments-section" postId={postId} /> }

        </div>
    </article>);
}