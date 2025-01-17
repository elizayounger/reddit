// import modules:
import React, { useState, useEffect } from "react";  
import { useDispatch, useSelector } from "react-redux";
import "./Post.css";

// import redux actions
import { selectPostViaId } from "../features/newsfeed/NewsfeedSlice";

// imported components:
import Comments from "../features/comments/Comments";
import { ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";
import { ReactComponent as Dot } from "../resources/icons/dot-icon.svg";
import { ReactComponent as Uparrow } from "../resources/icons/up-arrow-icon.svg";
import { ReactComponent as Downarrow } from "../resources/icons/down-arrow-icon.svg";
import { ReactComponent as CommentIcon } from "../resources/icons/comment-icon-soft.svg";


export default function Post({postId}) {

    const [ isComments, setIsComments ] = useState(false);
    useEffect(() => {
        if (isComments) {
            // TODO: dispatch(loadPostComments(postId));
        }
    }, [isComments]);

    const post = useSelector(selectPostViaId(postId));
        
    return(<article className="post-container" id={postId}>

        <div className="post">

            <header className="post-author">
                < ProfilePic className="profile-pic" />
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