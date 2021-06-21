import React from 'react';

const PhotoFeedChunk = () => {
    //in actual implementation, this will return a single div
    return (
        <>   {/* // for each photo in Photo.query.all(where: recent) */}
            <div className="feed--photo-div">
                <div>
                    <p>Photo Div</p>
                    <img src="../../public/example-images/IMG_3396.JPG"/>
                    <a href="#">Link to User's Pgae</a>
                </div>
            </div>
            <div className="feed--photo-div">
                <div>
                    <p>Photo Div</p>
                    <img src="../../public/example-images/IMG_3465.jpeg" className="feed--photo" alt="details"/>
                    <a href="#">Link to User's Pgae</a>
                </div>
            </div>
        </>
    )
}

export default PhotoFeedChunk;
