import React from 'react';
import {Link} from 'react-router-dom';
import "./album.css";

const PhotoThumbnail = ({photo}) => {

    return (
        <div className="photoThumbnail">
            <div className="thumbnail-div">
                <Link to={`/photos/${photo?.id}`}>
                    <img className="uploaded--photo" src={`${photo?.image_url}`} alt={`${photo?.title}`}></img>
                </Link>
                <p>{photo?.title}</p>
            </div>
        </div>
    )
}

export default PhotoThumbnail;
