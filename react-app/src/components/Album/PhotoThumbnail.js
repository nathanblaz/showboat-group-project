import React from 'react';
import {Link} from 'react-router-dom';

const PhotoThumbnail = ({photo}) => {

    return (
        <Link to={`/photos/${photo?.id}`}>
            <img className="uploaded--photo" src={`${photo?.image_url}`}></img>
          </Link>
    )
}

export default PhotoThumbnail;
