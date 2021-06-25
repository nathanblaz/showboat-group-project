import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderPhotoTags } from '../../src/store/tag';
import { renderOnePhoto } from '../store/photo';
import { useParams } from 'react-router';


const PhotoTagSidebar = ({id}) => {
    //const tags = useSelector(state for tags?)
    const dispatch = useDispatch();
    // const tags = useSelector(state => Object.values(state.tagReducer));
    // console.log("tags from PhotoTagSidebar", tags)
    const photo = useSelector(state => state.photoReducer);
    console.log('photo from PhotoTagSidebar', photo)

    useEffect(()=>{
        dispatch(renderOnePhoto(Number(id)))
    }, [dispatch])
    console.log(photo.tags, "***********************photo tags********")

    useEffect(() => {
        dispatch(renderPhotoTags())
    }, [dispatch])

    return (
        <div className="tag-sidebar">
            {/* <div className="tag-sidebar-tag"><NavLink>Tag1</NavLink></div> */}
            <h2>Tags for This Photo</h2>
            {photo.tags?.map(tag =>
            <div className="tag-sidebar-tag" key={tag?.id}>
                <Link to={`/tags/${tag?.id}`}>{tag?.name}</Link>
            </div>
                )}
        </div>
    )
}

export default PhotoTagSidebar;
