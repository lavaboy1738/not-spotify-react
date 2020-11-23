import { time } from "console";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Song } from "../global";
import "../styles/Player.scss";

type Props = {
    currentSong: Song;
    isPlaying: boolean;
    onChange: ()=>void;
}

const Player = (props: Props) => {
    const {currentSong, isPlaying} = props;
    const audioRef = useRef<HTMLAudioElement>(null);
    const [songTime, setSongTime] = useState({currentTime: 0, duration: 0});

    //event handlers
    const playHandler = () => {
        if(audioRef.current && isPlaying){
            audioRef.current.pause();
            props.onChange();
        }else if(audioRef.current && !isPlaying){
            audioRef.current.play();
            props.onChange();
        }
    }

    const dragHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(audioRef.current){
            audioRef.current.currentTime = parseInt(event.target.value)
            setSongTime({...songTime, currentTime: parseInt(event.target.value)})
        }
    }

    const nextHandler = () => {

    }

    const prevHandler = () => {

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
        if(audioRef.current){
            setSongTime({...songTime, 
                currentTime: audioRef.current.currentTime, 
                duration: audioRef.current.duration})
        }
    }

    return(
        <div className="player">
            <div className="time-control">
                <p className="start-time">{getTime(songTime.currentTime)}</p>
                <input type="range"
                min={0} max={songTime.duration} 
                value={songTime.currentTime}
                onChange={dragHandler}
                className="progress-bar" />
                <p className="end-time">{getTime(songTime.duration)}</p>
            </div>
            <div className="play-control">
                <i className="bx bx-chevron-left"></i>
                <i className={isPlaying? "bx bx-pause": "bx bx-play"}
                 onClick={playHandler} ></i>
                <i className="bx bx-chevron-right"></i>
            </div>
            <audio src={currentSong.source} ref={audioRef} 
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            ></audio>
        </div>
    )
}

export {Player}