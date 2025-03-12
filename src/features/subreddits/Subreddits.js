// import modules
import React, { useEffect } from "react";
import "./Subreddits.css";
import { useSelector } from "react-redux";

// import components
import Card from "../../components/Card.js";

// import actions / selectors
import { selectSubreddits, getSelectedSubreddit, selectIsLoading, selectIsError } from "./SubredditsSlice.js";

export default function Subreddits({setMobileNav}) {
    const subreddits = useSelector(selectSubreddits);
    const getDisplayName = useSelector(getSelectedSubreddit);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    return (
        <section className="subreddits">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading subreddits.</p>}
      
            {subreddits.map(subredditName => (
            <Card
                key={subredditName} // Add a unique key
                displayName={subredditName}
                className={`subreddit-button ${subredditName === getDisplayName ? "selected" : ""}`}
                setMobileNav={setMobileNav}
            />
        ))}
        </section>
    );   
};