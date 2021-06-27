import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhotoFeedChunk from "./PhotoFeedChunk";
import TagSidebar from "./TagSidebar";
import AboutUs from "./AboutUs";
import { renderAllPhotos } from "../store/photo.js";


const HomePage = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => Object.values(state.photoReducer));

    useEffect(() => {
        dispatch(renderAllPhotos());
      }, [dispatch]);

    return (
        <div className="home-page-container">
            <div className="feed">
            {photos?.map((photo) =>
                <div key={photo?.id}>
                    <PhotoFeedChunk photo={photo} />
                </div>)}
            </div>
            <div className="sidebar">
                <TagSidebar />
                <div> <AboutUs /> </div>
            </div>
        </div>
    )
}

export default HomePage;
