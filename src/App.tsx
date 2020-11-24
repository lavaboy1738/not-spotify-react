import React, {useRef, useState} from "react";
import "./helper.scss";
import "./styles/App.scss"
import {CurrentSong} from "./Components/Song";
import {Library} from "./Components/Library";
import {Player} from "./Components/Player";
import {Nav} from "./Components/Nav";
import {SongLibrary as data} from "./utils/SongLibrary";

const App:React.FunctionComponent = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryDisplay, setLibraryDisplay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div 
    style={{background: `linear-gradient(to right,${currentSong.color}, #333 35%, #333, #333 35%, #333,#191414 100%)`}}
    className="app"
    >
      <div className="wrapper">
        <Nav libraryDisplay={libraryDisplay} setLibraryDisplay={setLibraryDisplay} ></Nav>
        <Library 
        libraryDisplay={libraryDisplay}
        setCurrentSong={setCurrentSong} 
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        currentSong = {currentSong}
        ></Library>

        <CurrentSong currentSong={currentSong}></CurrentSong>
        <Player currentSong={currentSong} 
        setCurrentSong = {setCurrentSong}
        songs = {songs}
        isPlaying={isPlaying} 
        onChange={()=>{setIsPlaying((x)=>!x)}}
        audioRef={audioRef}
        // onChange={()=>setCurrentSong({})}
        ></Player>
      </div>
    </div>
  )
}

export {App};
