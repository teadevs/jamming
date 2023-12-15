import React, { useCallback } from 'react';
import './Track.css';

const Track = (props) => {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    );

    const trackChanges = () => {
        if (props.trackRemove) {
            return (
                <button className="Track-action" onClick={removeTrack}>
                    No thanks!
                </button>
            );
        }
        return (
            <button className="Track-action" onClick={addTrack}>
                Want it!
            </button>
        );
    };

    return (
        <div className="Track">
            {trackChanges()}
            <div className="Track-information">
                <h4>{props.track.title}</h4>
                <p>{props.track.artist} - {props.track.album}</p>
            </div>
        </div>
    );
};

export default Track;
