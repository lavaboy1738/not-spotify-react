import React from "react";
import "../styles/Library.scss";
import {ListingSong} from "./ListingSong";
import {SongLibrary as data} from "../utils/SongLibrary";
import { Song } from "../global";
import { CurrentSong } from "./Song";

type Prop = {
    setCurrentSong: (song: Song)=>void;
    audioRef: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    currentSong: Song;
    libraryDisplay: boolean;
}

const Library = (props: Prop) => {
    const libraryData = data();
    return(
        <div className="library" 
        style={
            props.libraryDisplay?
            {boxShadow: `2px 2px 50px ${props.currentSong.color}`,
            background: `linear-gradient(to left ,${props.currentSong.color}, #333 30%,#333, #333 30%, #333, #191414 100%)`,
            left: `0`}
            :
            {boxShadow: `2px 2px 50px ${props.currentSong.color}`,
         background: `linear-gradient(to left ,${props.currentSong.color}, #333 30%,#333, #333 30%, #333, #191414 100%)`,
         left: `-20rem`}
        }>
            <h1 className="library-title">Song Library</h1>
            <div className="library-listings">
                <div className="song-listing">
                    {libraryData.map((song)=>{
                        return <ListingSong song={song} 
                        setCurrentSong = {props.setCurrentSong} 
                        audioRef={props.audioRef}
                        key={song.id}
                        isPlaying={props.isPlaying}
                        currentSong = {props.currentSong}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export {Library}