// import modules
import React from "react";
import "./Subreddits.css";

// import components
import Card from "../../components/Card.js";

export default function Subreddits() {
    const subredditDisplayNames = [
        "Home",
        "AskReddit",
        "NoStupidQuestions"
    ]

    return (<section className="subreddits">
        {subredditDisplayNames.map(displayName => < Card displayName={displayName} />)}
    </section>)
}