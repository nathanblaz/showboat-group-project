import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { renderAllPhotos } from '../store/photo';
import { getOneTag } from '../store/tag';
import DeleteATag from './DeleteATag';
// import PhotoTagSidebar from './PhotoTagSidebar';
import UpdateTag from './UpdateTag';


const SingleTag = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const tag = useSelector(state => state.tagReducer);
    // console.log(tag, 'TAG FROM SINGLE TAG COMPONENT')
    const photos = useSelector(state => Object.values(state.photoReducer));
    // console.log(photos, "PHOTOS FROM SINGLE TAG COMPONENT&&&&&&&&&&&&&&")
    const user = useSelector(state => state.session.user)
    // console.log(user, 'USER FROM SINGLE TAG COMPONENT')

    let filteredPhotos;

    if(photos.length > 1){
         filteredPhotos = photos.filter(photo => {
            if(photo?.tag_ids?.includes(tag.id)) return photo
            // console.log(photo, "FILTERED PHOTOS FROM SINGLE TAG COMPONENT")
        })
    } else {
        filteredPhotos=[photos]
    }

    useEffect(() => {
        dispatch(getOneTag(id))
        dispatch(renderAllPhotos())
    }, [dispatch, id])

    // console.log(filteredPhotos, 'FILTERED PHOTOS FROM THE SINGLE TAG **************')
    return (
        <div>
        <h2 id="single-tag-page">{tag.name}</h2>
        <br />
        {tag.user_id === user.id ?
            <div id="single-tag-buttons">
                <div>
                    <DeleteATag />
                    <UpdateTag />
                </div>
            </div>
            : null
    }
            <div className="feed--photo-div">
                {filteredPhotos &&
                    <div>
                        {filteredPhotos.length ? filteredPhotos.map(photo => (
                            <Link to={`/photos/${photo?.id}`}>
                            <img className="feed--photo" src={`${photo?.image_url}`} />
                            </Link>
                        )) : "No Photos Found"
                    }
                    </div>
                }
            </div>
        </div>
    )
}

export default SingleTag;
