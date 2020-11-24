import React from "react";
import { Song } from "../global";
import "../styles/Song.scss";

type Prop = {
    currentSong: Song;
}

const CurrentSong = (props: Prop) => {
    const {cover, artist, name} = props.currentSong;
    return(
        <div className="song-container">
            <div className="cover-wrapper">
                <img src={cover} alt=""/>
            </div>
            <div className="song-name">{name}</div>
            <div className="song-artist">{artist}</div>
        </div>
    )
}

export {CurrentSong}