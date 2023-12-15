import React, { useState, useCallback } from "react";
import "./Playlist.css";

import TrackList from '../TrackList/TrackList';
import Spotify from './util/Spotify'; 


const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"Make New Music!"} />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="Playlist-save" onClick={props.onSave}>
        SPOTIFY, DO YOUR THANG!
      </button>
    </div>
  );
};

export default Playlist;
