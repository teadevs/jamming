import React, { useState, useCallback } from 'react';
import './SearchBar.css';


const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  

  const getTracks = async () => {
    const spotifyUrl = "https://api.spotify.com/v1/search?type=track";
    const musicQuery = inputField.value;
    const queryParams = `?q=${musicQuery}`;
    const endpoint = `${spotifyUrl}${queryParams}`;
  
    try {
      const response = await fetch(endpoint, { headers: { Authorization: `Bearer ${Spotify.getAccessToken()}` } });
      
      if (response.ok) {
        const jsonResponse = await response.json();
        renderResponse(jsonResponse);
      } else {
        console.error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  

  return (
    <div className="container">
      <h2>Let's Find Some Tunes!</h2>
      <div className="SearchBar">
        <input
          placeholder="What are you looking for?"
          onChange={handleTermChange}
        />
        <button className="SearchButton" onClick={displayTracks}>
          Let's Go!
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
