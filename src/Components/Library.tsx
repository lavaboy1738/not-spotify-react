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
        <div className={props.libraryDisplay? "library library active":"library"}>
            <h1>Library</h1>
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