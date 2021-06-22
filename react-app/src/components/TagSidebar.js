import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TagSidebar = () => {
    //const tags = useSelector(state for tags?)

    return (
        <div className="tag-sidebar">
            {/* for each tag in Tag.query.all() */}
            {/* <div className="tag-sidebar-tag"><NavLink>Tag1</NavLink></div> */}
            <div className="tag-sidebar-tag"><a href="#">Tag</a></div>
            <div className="tag-sidebar-tag"><a href="#">Tag</a></div>
            <div className="tag-sidebar-tag"><a href="#">Example Tag</a></div>
            <div className="tag-sidebar-tag"><a href="#">Another Long Tag</a></div>
            <div className="tag-sidebar-tag"><a href="#">Activities</a></div>
            <div className="tag-sidebar-tag"><a href="#">Hobbies</a></div>
        </div>
    )
}

export default TagSidebar;
