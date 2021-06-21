import React from 'react';

const PhotoFeedChunk = () => {
    //in actual implementation, this will return a single div
    return (
        <div>   {/* // for each photo in Photo.query.all(where: recent) */}
            <div className="feed--photo-div">
                <div className="user-object">
                    <div className="user-object--avi"> Avi </div>
                    <a className="user-object--user" href="#">Username</a>
                    <p className="user-object--timestamp">Timestamp</p>
                    <div className="user-object--content">
                        <p>Photo Title</p>
                    </div>
                </div>
                <div className="feed--photo">
                    <p>Photo</p>
                </div>
            </div>
        </div>
    )
}

export default PhotoFeedChunk;
