import React, { useState, useCallback } from "react";
import "./App.css";
import Spotify from './util/Spotify'; 
import Playlist from './components/Playlist/Playlist'; 
import SearchResults from './components/SearchResults/SearchResults';
import SearchBar from './components/SearchBar/SearchBar';
import TrackList from './components/TrackList/TrackList'; 
import SavePlaylistButton from "./components/savePlaylistButton";
  
const App = () => {
    const [searchResults, setSearchResults] = useState([{id: '1', name: 'track 1,', artist: 'Artist 1', album: 'Album 1'}, {id: '2', name: "track 2", artist: 'Artist 2', album: 'Album 2'}]);
    const [playlistName, setPlaylistName] = useState("New Tunes");
    const [playlistTracks, setPlaylistTracks] = useState([{id: '3', name: 'track 3', artist: 'Artist 3', album: 'Album 3'}]);

    const search = useCallback((term) => {
        Spotify.search(term).then(setSearchResults);
        setSearchResults([])
    }, []);

   const addTrack = (track) => {
    const trackIndex = playlistTracks.findIndex((t) => t.id === track.id);
    
    if (trackIndex === -1) {
        setPlaylistTracks([...playlistTracks, track]);
    }
        };
    
    const savePlaylist = useCallback(()=>{
        const trackUris = playlistTracks.map((track) => track.uri);
        Spotify.savePlaylist(playlistName, trackUris).then(() => {
            setPlaylistName("New Tunes");
            setPlaylistTracks([]);
        });
    }, [playlistName, playlistTracks]);

    const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevTracks) =>
          prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
        );
      }, []);
          

return (
    <div>
        <h1>
            Jammming<span className="highlight">Tonight!</span>
        </h1>
        <div className="App">
            <SearchBar onSearch={search} />
            <div className="App-playlist">
                <SearchResults searchResults={searchResults} onAdd={addTrack} />
                <Playlist
                  playlistName={playlistName}
                  playlistTracks={playlistTracks}
                  //onNameChange={updatePlaylistName}
                  onRemove={removeTrack}
                  onSave={savePlaylist}
                  />
            </div>
            <savePlaylistButton playlistTracks= {TrackList} />
            </div>

        </div>
        );

};

export default App;