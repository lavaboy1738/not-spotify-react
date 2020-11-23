import React, {useRef, useState} from "react";
import "./helper.scss";
import "./styles/App.scss"
import {CurrentSong} from "./Components/Song";
import {Library} from "./Components/Library";
import {Player} from "./Components/Player";
import {SongLibrary as data} from "./utils/SongLibrary";

const App:React.FunctionComponent = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div 
    style={{background: `linear-gradient(to bottom ,${currentSong.color}, #333 30%, #333, #191414 100%)`}}
    className="app"
    >
      <Library setCurrentSong={setCurrentSong} 
      audioRef={audioRef} 
      isPlaying={isPlaying} 
      currentSong = {currentSong}
      ></Library>

      <CurrentSong currentSong={currentSong}></CurrentSong>
      <Player currentSong={currentSong} 
      isPlaying={isPlaying} 
      onChange={()=>{setIsPlaying((x)=>!x)}}
      audioRef={audioRef}
      // onChange={()=>setCurrentSong({})}
      ></Player>
    </div>
  )
}

export {App};
