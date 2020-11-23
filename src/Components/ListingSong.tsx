import React from "react";
import { Song } from "../global";
import "../styles/ListingSong.scss";

type Prop = {
    song: Song;
}

const ListingSong = (props: Prop)=>{
    return(
        <div className="listingSong">
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