import React from "react";
import "../styles/Nav.scss";

type Prop = {
    libraryDisplay: boolean;
    setLibraryDisplay: (status: boolean)=>void;
}

const Nav = (props: Prop) => {
    const toggleLibrary = () => {
        props.setLibraryDisplay(!props.libraryDisplay)
    }

    return (
        <div className="nav">
            <span className="nav-name">Not Spotify</span>
            <button className="nav-button" onClick={toggleLibrary}>
                Library
                <i className="bx bxs-playlist"></i>
            </button>

        </div>
    )
}

export {Nav}