import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TagSidebar = () => {
    //const tags = useSelector(state for tags?)

    return (
        <div className="tag-sidebar">
            {/* for each tag in Tag.query.all() */}
            {/* <div className="tag-sidebar-tag"><NavLink>Tag1</NavLink></div> */}
            <div className="tag-sidebar-tag">Tag</div>
            <div>Tag</div>
            <div>Example Tag</div>
            <div>Another Long Tag</div>
            <div>Activities</div>
            <div>Hobbies</div>
        </div>
    )
}

export default TagSidebar;
