import React from "react";
import "./Comments.css";
import Comment from "../../components/Comment.js";

export default function Comments({postId}) {
    const comment = {
        commentId: '0123',
        name: 'Zulu Masson',
        timePassed: "2 hours",
        comment: "you smell"
    }

    return (<section className="comments-container">
        < Comment id={comment.commentId} name={comment.name} timePassed={comment.timePassed} comment={comment.comment} />
        < Comment id={comment.commentId} name={comment.name} timePassed={comment.timePassed} comment={comment.comment} />
    </section>)
}