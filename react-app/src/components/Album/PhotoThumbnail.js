import React from 'react';
import {Link} from 'react-router-dom';
import "./album.css";

const PhotoThumbnail = ({photo}) => {

    return (
        <div className="photoThumbnail">
            <div>
                <Link to={`/photos/${photo?.id}`}>
                    <img className="uploaded--photo" src={`${photo?.image_url}`}></img>
                </Link>
            </div>
            <p>{photo.title}</p>
        </div>
    )
}

export default PhotoThumbnail;
