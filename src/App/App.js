import logo from '../logo.svg';
import './App.css';

// import components/features
import Searchbar from '../features/searchBar/Searchbar.js';
import Newsfeed from '../features/newsfeed/Newsfeed.js';
import Subreddits from '../features/subreddits/Subreddits.js';
// import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';

// const router = createBrowserRouter(createRoutesFromElements(
//    <Route path="/" element={< Home />} />
// ))

function App() {
   return (
      <div className="App">
         < Searchbar /> 
         <div className="homepage-split">
            < Newsfeed />
            < Subreddits />
         </div>
         
      </div>
   );
}

export default App;
