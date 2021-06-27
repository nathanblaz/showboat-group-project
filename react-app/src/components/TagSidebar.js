import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { renderPhotoTags } from "../../src/store/tag";

const TagSidebar = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => Object.values(state.tagReducer));

  useEffect(() => {
    dispatch(renderPhotoTags());
  }, [dispatch]);

  return (
    <div className="tag-sidebar">
      {/* <div className="tag-sidebar-tag"><NavLink>Tag1</NavLink></div> */}
      <h3>Explore Photos By Tag</h3>
      {tags?.map((tag) => (
        <div className="tag-sidebar-tag" key={tag?.id}>
          <Link to={`/tags/${tag?.id}`}>{tag?.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default TagSidebar;
