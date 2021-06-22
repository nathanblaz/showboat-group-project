import React from 'react';
import PhotoFeedChunk from "./PhotoFeedChunk";
import TagSidebar from "./TagSidebar";


const HomePage = () => {

    return (
        <>
            <div>
                <PhotoFeedChunk />
            </div>
            <div>
                <TagSidebar />
            </div>
        </>
    )
}

export default HomePage;
