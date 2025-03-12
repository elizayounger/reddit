import logo from '../logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import local resources
import { loadSubreddits, getSelectedSubreddit } from "../features/subreddits/SubredditsSlice.js";
import { loadNewsfeed } from "../features/newsfeed/NewsfeedSlice.js";

// import components/features
import Searchbar from '../features/searchBar/Searchbar.js';
import Newsfeed from '../features/newsfeed/Newsfeed.js';
import Subreddits from '../features/subreddits/Subreddits.js';

function App() {
   const dispatch = useDispatch();
   let selectedSubreddit = useSelector(getSelectedSubreddit);

   useEffect(() => { // loads the subreddits on first render
      dispatch(loadSubreddits());
   }, [dispatch]);

   useEffect(() => { // loads the subreddit posts for the selected post on first render
      if (selectedSubreddit) {
         dispatch(loadNewsfeed(selectedSubreddit)); 
      }
   }, [dispatch, selectedSubreddit]); // Runs whenever selectedSubreddit changes and makes sure dispatch is ready


   const [mobileNav, setMobileNav] = useState(false);
      
   return (
      <div className="App">
         < Searchbar setMobileNav={setMobileNav} /> 

         <div className="mobile-nav" style={{ display: mobileNav ? "block" : "none" }}>
            < Subreddits />
         </div>

         <div className="homepage-split">
            < Newsfeed />
            < Subreddits />
         </div>
         
      </div>
   );
}

export default App;
