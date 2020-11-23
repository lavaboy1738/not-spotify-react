import React, {useState} from "react";
import "./helper.scss";
import {CurrentSong} from "./Components/Song";
import {Library} from "./Components/Library";
import {Player} from "./Components/Player";
import {SongLibrary as data} from "./utils/SongLibrary";

const App:React.FunctionComponent = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {/* <Library></Library> */}
      <CurrentSong currentSong={currentSong}></CurrentSong>
      <Player currentSong={currentSong} isPlaying={isPlaying} onChange={()=>{setIsPlaying((x)=>!x)}}
      // onChange={()=>setCurrentSong({})}
      ></Player>
    </div>
  )
}

export {App};
