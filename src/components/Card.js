// import modules
import React from "react";
import './Card.css'

// import components
import { ReactComponent as ProfilePic } from "../resources/icons/user-profile-icon.svg";

// Component
export default function Card({displayName}) {

    return(<button className="subreddit-button" key={displayName}>
        < ProfilePic />
        <h2>{displayName}</h2>
    </button>)
}