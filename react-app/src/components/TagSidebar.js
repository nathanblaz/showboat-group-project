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
            {/* for each tag in Tag.query.all() */}
            {/* <div className="tag-sidebar-tag"><NavLink>Tag1</NavLink></div> */}
            {tags.map(tag =>
            <div className="tag-sidebar-tag" key={tag.id}><a href="#">{`${tag?.name}`}</a>
                {`${tag.name}`} this works
            </div>
                )}
            {/* <div className="tag-sidebar-tag"><a href="#">Tag</a></div>
            <div className="tag-sidebar-tag"><a href="#">Example Tag</a></div>
            <div className="tag-sidebar-tag"><a href="#">Another Long Tag</a></div>
            <div className="tag-sidebar-tag"><a href="#">Activities</a></div>
            <div className="tag-sidebar-tag"><a href="#">Hobbies</a></div> */}
            <h2></h2>
        </div>
    )
}

export default TagSidebar;


