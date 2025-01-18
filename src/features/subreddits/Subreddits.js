// import modules
import React, { useEffect } from "react";
import "./Subreddits.css";
import { useDispatch, useSelector } from "react-redux";

// import components
import Card from "../../components/Card.js";

// import actions / selectors
import { loadSubreddits, selectSubreddits } from "./SubbredditsSlice.js"


export default function Subreddits() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSubreddits());
    }, [dispatch]);

    const subreddits = useSelector(selectSubreddits);

    const subredditsMock = [
        "Home",
        "AskReddit",
        "NoStupidQuestions"
    ]

    return (<section className="subreddits">
        {subreddits.map(displayName => < Card displayName={displayName} />)}
    </section>)
}