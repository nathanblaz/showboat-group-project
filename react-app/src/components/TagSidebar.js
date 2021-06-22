import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TagSidebar = () => {
    //const tags = useSelector(state for tags?)

    return (
        <div className="tag-sidebar">
            {/* for each tag in Tag.query.all() */}
            {/* <NavLink>Tag1</NavLink> */}
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
        </div>
    )
}

export default TagSidebar;
