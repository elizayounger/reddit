import logo from '../logo.svg';
import './App.css';

import Searchbar from '../features/searchBar/Searchbar';
import Post from '../components/Post';
// import Newsfeed from '../features/newsfeed/Newsfeed';
// import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';

// const router = createBrowserRouter(createRoutesFromElements(
//    <Route path="/" element={< Home />} />
// ))

function App() {
   return (
      <div className="App">
         < Searchbar /> 
         < Post />
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
            Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
