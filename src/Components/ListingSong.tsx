import React from "react";
import { Song } from "../global";
import "../styles/ListingSong.scss";

type Prop = {
    song: Song;
    setCurrentSong: (song: Song)=>void;
    audioRef: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    currentSong: Song;
}

const ListingSong = (props: Prop)=>{

    const selectSongHandler = () => {
        props.setCurrentSong(props.song)
        if(props.audioRef.current && props.isPlaying){
            props.audioRef.current.play().then((audio)=>{
                if(props.audioRef.current){
                    props.audioRef.current.play();
                }
            })
        }
    }

    return(
        <div className={props.currentSong.name === props.song.name? "listingSong active" : "listingSong"} onClick={selectSongHandler} >
            <div className="left">
                <img src={props.song.cover} alt=""/>
            </div>
            <div className="right">
                <div className="listingSong-name">{props.song.name}</div>
                <div className="listingSong-artist">{props.song.artist}</div>
            </div>
        </div>
    )
}

export {ListingSong}