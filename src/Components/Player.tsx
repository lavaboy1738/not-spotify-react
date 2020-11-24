import { time } from "console";
import React, { useState } from "react";
import { Song } from "../global";
import "../styles/Player.scss";

type Props = {
    currentSong: Song;
    setCurrentSong: (song: Song)=>void;
    songs: Song[];
    isPlaying: boolean;
    onChange: ()=>void;
    audioRef: React.RefObject<HTMLAudioElement>;
}

const Player = (props: Props) => {
    const {currentSong, isPlaying} = props;
    const [songTime, setSongTime] = useState({currentTime: 0, duration: 0});

    //event handlers
    const playHandler = () => {
        if(props.audioRef.current && isPlaying){
            props.audioRef.current.pause();
            props.onChange();
        }else if(props.audioRef.current && !isPlaying){
            props.audioRef.current.play();
            props.onChange();
        }
    }

    const dragHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(props.audioRef.current){
            props.audioRef.current.currentTime = parseInt(event.target.value)
            setSongTime({...songTime, currentTime: parseInt(event.target.value)})
        }
    }

    const skipHandler = (direction: "next" | "prev") => {
        const currentIndex = props.songs.findIndex(song=> song.id === props.currentSong.id)
        if(direction === "next"){
            if(currentIndex === props.songs.length-1){
                props.setCurrentSong(props.songs[0])
            }else{
                props.setCurrentSong(props.songs[currentIndex+1])
            }
        }else{
            if(currentIndex === 0){
                props.setCurrentSong(props.songs[props.songs.length-1])
            }else{
                props.setCurrentSong(props.songs[currentIndex-1])
            }
        }
    }

    const getTime = (time: number) => {
        const minutes = Math.floor(time/60);
        //check how many digits seconds have and add zero in the front accordingly
        const seconds = (Math.floor(time % 60).toString()).length < 2 ?
          "0" + (Math.floor(time % 60).toString()) 
          :  
          (Math.floor(time % 60).toString())

        return `${minutes}:${seconds}`
    }

    const timeUpdateHandler = () => {
        if(props.audioRef.current){
            setSongTime({...songTime, 
                currentTime: props.audioRef.current.currentTime, 
                duration: props.audioRef.current.duration})
        }
    }

    return(
        <div className="player">
            <div className="time-control">
                <p className="start-time">{getTime(songTime.currentTime)}</p>
                <input type="range"
                min={0} max={songTime.duration | 0} 
                value={songTime.currentTime}
                onChange={dragHandler}
                className="progress-bar" />
                <p className="end-time">{getTime(songTime.duration)}</p>
            </div>
            <div className="play-control">
                <i className="bx bx-chevron-left" onClick={()=>skipHandler("prev")}></i>
                <i className={isPlaying? "bx bx-pause": "bx bx-play"}
                 onClick={playHandler} ></i>
                <i className="bx bx-chevron-right" onClick={()=>skipHandler("next")}></i>
            </div>
            <audio src={currentSong.source} ref={props.audioRef} 
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            ></audio>
        </div>
    )
}

export {Player}