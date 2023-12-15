import React from 'react';
import './SearchResults.css';
import Spotify from './util/Spotify'; 


import TrackList from '../TrackList/TrackList';

const SearchResults = (props) => {
    return (
        <div className="container">
        <div className="SearchResults">
            <h2>Here's what I found</h2>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
            </div>
        </div>
    );
};

export default SearchResults;


