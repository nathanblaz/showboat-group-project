// render in PhotoPage!!!!!!!
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addTagToPhoto, renderPhotoTags } from '../store/tag';
import TagSelect from './TagSelect';
import UpdateTag from './UpdateTag';

const AddNewTag = ({id}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState("");

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

return (

    <div>

        <h2>Add a Tag</h2>
        <form onSubmit={handleSubmit}>
            <div class="form-input-container" id='tag-bar'>
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
    </div>

)
};

export default AddNewTag;
