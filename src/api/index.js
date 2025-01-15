import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// ----------------------- 1. Check Page for Token --------------------

useEffect( async () => {
   const checkToken = async () => {
      const extractedToken = extractToken(); // checks sessionStorage &/or params for token to return. unsuccessful will return null
      
      if (!extractedToken) { 
         await getAuthorisation(); // Trigger authorization if token is null
      }
   };

   checkToken(); 

}, []); // TODO: check if dependency correct

// ----------------------- 2. request Authorisation -----------------------

export async function getAuthorisation() {
   const CLIENT_ID = 'HAb5UaQ8HusFvDCu3AO-BQ';
   const TYPE = 'code';
   const RANDOM_STRING = accessRandomString();
   const URI = encodeURIComponent('http://localhost:3000/');
   const DURATION = 'temporary';
   const SCOPE = ['edit', 'mysubreddits', 'read', 'submit', 'vote', 'wikiedit', 'wikiread'];
   const SCOPE_STRING = encodeURIComponent(SCOPE.join(' '));

   const url = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`;

   const response = await fetch(url);
   if (!response.ok) {
      throw new Error(`Failed to fetch authorization URL. Status: ${response.status}`);
   }
};

function accessRandomString() { // extracts verifier from session storage
   let verifier = sessionStorage.getItem("verifier");
   if (!verifier) {
      sessionStorage.setItem("verifier", generateRandomString());
      verifier = sessionStorage.getItem("verifier");
   }
   
   return verifier;
}
function generateRandomString() { // called by getRandomString() generates a string for session storage if it doesn't already have one
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const length = 16;
   let result = '';
   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
   }
   return result;
}

// ----------------------- 3. after URI Redirect -----------------------

function extractToken() {
   const getToken = sessionStorage.getItem('token'); // check if token in local storage
   if (getToken) {
      return getToken;
   } else {
      const { token } = useParams(); // then checks if token in url params
      if (token) {
         const TOKEN_LIFETIME = 3600
         sessionStorage.setItem("token", token);
         sessionStorage.setItem('expiry', Date.now() + TOKEN_LIFETIME);
         return token;
      } else {
         return null; // finally returns null if unsuccessful
      }
   }
   // TODO: set timer for token expiry
};

// ----------------------- 4. fetchUserFeed -----------------------
const useToken = (func) => {
   const token = sessionStorage.getItem('token');
   if (!token) {

   }
}

const fetchUserData = async (token) => {
   const response = await fetch('https://api.example.com/userfeed', {
     headers: {
       'Authorization': `Bearer ${token}`
     }
   });
 
   if (!response.ok) {
     throw new Error('Network response was not ok' + response.statusText);
   }
 
   const data = await response.json();
   return data;
 };
 
//  fetchUserData(userToken)
//    .then(data => console.log('User Data:', data))
//    .catch(error => console.error('Error fetching user data:', error));
 
//    function extractToken() {
//       const getToken = sessionStorage.getItem('token');
//       const expiry = sessionStorage.getItem('expiry');
   
//       // Check if token exists and is still valid
//       if (getToken && expiry && Date.now() < parseInt(expiry, 10)) {
//          return getToken;
//       }
   
//       // If token expired or doesn't exist, check URL params
//       const { token } = useParams();
//       if (token) {
//          const expiryTime = Date.now() + 60 * 60 * 1000; // 1 hour in milliseconds
//          sessionStorage.setItem("token", token);
//          sessionStorage.setItem("expiry", expiryTime);
//          return token;
//       }
   
//       // If no valid token is found, return null
//       return null;
//    }
   