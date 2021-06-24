import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {renderPhotoTags} from '../../src/store/tag';

const TagSidebar = () => {
    //const tags = useSelector(state for tags?)
    const dispatch = useDispatch();
    const tags = useSelector(state => Object.values(state.tagReducer));

    useEffect(() => {
        dispatch(renderPhotoTags(tags))
    }, [dispatch])

    return (
        <div className="tag-sidebar">
            {/* <div className="tag-sidebar-tag"><NavLink>Tag1</NavLink></div> */}
            <h2>Explore Photos By Tag</h2>
            {tags?.map(tag =>
            <div className="tag-sidebar-tag" key={tag?.id}><a href="#">{`${tag?.name}`}</a>
            </div>
                )}

        </div>
    )
}

export default TagSidebar;
