// import modules
import React from "react";
import './Card.css'
import { useDispatch } from "react-redux";

// import local resources
import { ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";
import { changeSelectedSubreddit } from "../features/subreddits/SubredditsSlice.js";

// Component
export default function Card({displayName, className, setMobileNav}) {
    const dispatch = useDispatch();

    const onClick = () => {    
        dispatch(changeSelectedSubreddit(displayName));
        setMobileNav(false);
    };

    return(<button className={className} key={displayName} onClick={onClick}>
        < ProfilePic />
        <h2>{displayName}</h2>
    </button>)
}