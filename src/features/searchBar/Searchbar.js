import React from "react";
import './Searchbar.css'
import { ReactComponent as RedditIcon } from '../../resources/icons/reddit-icon.svg';
import { ReactComponent as MenuIcon } from '../../resources/icons/menu-icon.svg';

export default function Searchbar({setMobileNav}) {
    return (<div className="searchbar">
        < RedditIcon className="reddit-icon" /> 
        < MenuIcon className="menu-icon" onClick={() => setMobileNav(prev => !prev)} /> 
        
        <form className="searchbar-input">
            <input type="search" placeholder="search"/>
            <button type="search">Submit</button>
        </form>
    </div>)
}