import React from "react";
import "../styles/Library.scss";
import {ListingSong} from "./ListingSong";
import {SongLibrary as data} from "../utils/SongLibrary";

const Library = () => {
    const libraryData = data();
    return(
        <div className="library">
            <h1 className="library-title">Song Library</h1>
            <div className="library-listings">
                <div className="song-listing">
                    {libraryData.map((song)=>{
                        return <ListingSong song={song} />
                    })}
                </div>
            </div>
        </div>
    )
}

export {Library}