import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import { addTagToPhoto, renderPhotoTags, addExistingTagToPhoto } from "../../src/store/tag";
import AddNewTag from "./AddNewTag";


const TagSelect = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [tag, setTag] = useState('');
    const [newTag, setNewTag] = useState('');
    const [formOpen, setFormOpen] = useState(false);
    const [name, setName] = useState("");

    const tags = useSelector(state => Object.values(state.tagReducer));

    // console.log(tags, '&&&&&&&&&&************')

    const selectTag = (e) => {
        e.preventDefault();
        // history.pushState(`/photos/${id}`)
        if(e.target.value === 'newTag') {
            console.log('newTag', '***********************************')
            setFormOpen(true)
        } else {
            const formData = new FormData();
            formData.append('tag', tag.name)
            dispatch(addExistingTagToPhoto(formData))
        }
        console.log('am i here??????????????????????????????????????????')
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
                // onChange={selectTag}
                // value={tag.id}
                >
                    <option default>Choose A Tag</option>
                    <option value={newTag}>Add A Tag</option>
                    {/* <option onClick={selectTag} value={newTag}>Add A Tag</option> */}
                    {tags.map(tag => (
                        <option
                        key={tag.id}
                        value={tag.id}
                        >
                            {tag.name}
                        </option>
                    ))}
                </select>
                <button type='submit'>Confirm Choice</button>
              </form>
                <div>
                    {formOpen &&
                       <form onSubmit={handleSubmit}>
                       <div className="form-input-container" id='tag-bar'>
                           <h2>Add A Tag</h2>
                           {console.log('is this available***********************************')}
                           <input
                               type="text"
                               className="form-input"
                               name="name"
                               placeholder="Tag Name"
                               onChange={(e) => setName(e.target.value)}
                               value={name} />
                       </div>
                           {/* <TagSelect /> */}
                       <button type="submit">Submit</button>
                       {/* <UpdateTag /> */}
                   </form>
                    }
                </div>
          </div>
      )
}

export default TagSelect;
