import React from 'react';
import PhotoFeedChunk from "./PhotoFeedChunk";
import TagSidebar from "./TagSidebar";


const HomePage = () => {

    return (
        <div className="home-page-container">
            <div>
                <PhotoFeedChunk />
            </div>
            <div className="sidebar">
                <TagSidebar />
            </div>
        </div>
    )
}

export default HomePage;
