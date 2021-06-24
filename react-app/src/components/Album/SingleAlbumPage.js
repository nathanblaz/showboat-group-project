import React from "react";
import {NavLink} from "react-router-dom";
import PhotoThumbnail from "./PhotoThumbnail";

const SingleAlbumPage = () => {

    return (
        <>
            <h1>A specific Album</h1>
            <div className="uploaded--photo-container">
                <p>The photos in this album render as thumbnails here</p>
            </div>
        </>
    )
}

export default SingleAlbumPage;
