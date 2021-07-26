import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { renderPhotoTags } from "../../src/store/tag";


const TagSelect = () => {
    const dispatch = useDispatch();

    const [tag, setTag] = useState('');

    const tags = useSelector(state => Object.values(state.tagReducer));

    console.log(tags, '&&&&&&&&&&************')

    // useEffect(() => {
    //     dispatch(renderPhotoTags());
    //   }, [dispatch]);

      return (
          <div>
              <form>
                <select
                id='tag-selector'
                onChange={(e) => setTag(e.target.value)}
                value={tag.id}
                >
                    <option default>Choose A Tag</option>
                    {tags.map(tag => (
                        <option
                        key={tag.id}
                        value={tag.id}
                        >
                            {tag.name}
                        </option>
                    ))}
                </select>
              </form>
          </div>
      )
}

export default TagSelect;
