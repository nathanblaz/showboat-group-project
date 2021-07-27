import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import { addTagToPhoto, renderPhotoTags, addExistingTagToPhoto } from "../../src/store/tag";
// import AddNewTag from "./AddNewTag";

//css is in auth.css

const TagSelect = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [formOpen, setFormOpen] = useState(false);
    const [name, setName] = useState("");

    const tags = useSelector(state => Object.values(state.tagReducer));

    // console.log(tags, '&&&&&&&&&&************')

    const selectTag = (e) => {
        e.preventDefault();

        if(e.target.value === "None") {
            setFormOpen(true)
        } else {
            const formData = new FormData();
            console.log(id, "this is the photo_id from the tagselect component")
            formData.append('tag_id', e.target.value)
            formData.append('photo_id', id)
            dispatch(addExistingTagToPhoto(formData))
        }

    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(name === ''){
            alert("Field cannot be blank")
        } else {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("id", id);
            setName("")

            dispatch(addTagToPhoto(formData));
            dispatch(renderPhotoTags());
            history.push(`/photos/${id}`)
        }
        };

    useEffect(() => {
        dispatch(renderPhotoTags());
      }, [dispatch]);

      return (
          <div>
              <form onSubmit={selectTag}>
                <select
                id='tag-selector'
                onChange={selectTag}
                // value={tag.id}
                >
                    <option default>Choose A Tag</option>
                    <option value='None'>Or Create Your Own Tag</option>

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
                <div>
                    {formOpen &&
                       <form onSubmit={handleSubmit}>
                       <div className="form-input-container" id='tag-bar'>
                           <h2>Add A Tag</h2>

                           <input
                               type="text"
                               className="form-input"
                               name="name"
                               placeholder="Tag Name"
                               onChange={(e) => setName(e.target.value)}
                               value={name} />
                       </div>

                       <button type="submit">Submit</button>
                      
                   </form>
                    }
                </div>
          </div>
      )
}

export default TagSelect;
