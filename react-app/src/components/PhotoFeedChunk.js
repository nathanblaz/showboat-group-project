import React from 'react';

const PhotoFeedChunk = ({photo}) => {
    const hoursAgo = () => {
        let hours = Math.ceil((Date.now() - Date.parse(photo?.created_at)) / 1000 / 60 / 60);
        if (hours === 1) {
            return "1 hour ago"
        } else if (hours < 24) {
            return `${hours} hours ago`
        } else {
            return `${Math.ceil(hours/24)} days ago`
        }
    };
    console.log(photo)
    //in actual implementation, this will return a single div
    return (
        <div>   {/* // for each photo in Photo.query.all(where: recent) */}
            <div className="feed--photo-container">
                <div className="user-object">
                    <img src={photo.user.avatar} className="user-object--avi" alt="avatar"/>
                    <a className="user-object--user" href={`/users/${photo?.user_id}`}>{photo?.user.username}</a>
                    <p className="user-object--timestamp">{hoursAgo()}</p>
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
