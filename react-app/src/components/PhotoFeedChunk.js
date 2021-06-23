import React from 'react';

const PhotoFeedChunk = ({photo}) => {
    //in actual implementation, this will return a single div
    return (
        <div>   {/* // for each photo in Photo.query.all(where: recent) */}
            <div className="feed--photo-container">
                <div className="user-object">
                    {/* <div className="user-object--avi"> Avi </div> */}
                    <a className="user-object--user" href="#">{photo?.user_id}</a>
                    <p className="user-object--timestamp">{photo?.created_at}</p>
                    <div className="user-object--content">
                        <p>{photo?.title}</p>
                    </div>
                </div>
                <div className="feed--photo-div">
                    <img className="feed--photo" src={`${photo?.image_url}`} />
                </div>
            </div>
        </div>
    )
}

export default PhotoFeedChunk;
