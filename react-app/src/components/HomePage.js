import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhotoFeedChunk from "./PhotoFeedChunk";
import TagSidebar from "./TagSidebar";
import { renderAllPhotos } from "../store/photo.js";


const HomePage = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => Object.values(state.photoReducer));

    useEffect(() => {
        dispatch(renderAllPhotos());
      }, [dispatch]);

    return (
        <>
            {photos.map((photo) =>
            <div className="home-page-container">
                <div>
                    <PhotoFeedChunk photo={photo} />
                </div>
                </div> )}
            <div className="sidebar">
                <TagSidebar />
            </div>
        </>
    )
}

export default HomePage;
