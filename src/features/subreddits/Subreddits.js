// import modules
import React, { useEffect } from "react";
import "./Subreddits.css";
import { useSelector } from "react-redux";

// import components
import Card from "../../components/Card.js";

// import actions / selectors
import { selectSubreddits, getSelectedSubreddit, selectIsLoading, selectIsError } from "./SubredditsSlice.js";

export default function Subreddits() {
    const subreddits = useSelector(selectSubreddits);
    const getDisplayName = useSelector(getSelectedSubreddit);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    return (<section className="subreddits">

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading subreddits.</p>}

        {subreddits.map(subredditName => {
            if (subredditName === getDisplayName) {
                console.log(`subredditName: ${subredditName} & getDisplayName: ${getDisplayName}`);
                return < Card displayName={subredditName} className="subreddit-button selected" />
            } else {
                return < Card displayName={subredditName} className="subreddit-button" />
            }
        })}

    </section>);
};