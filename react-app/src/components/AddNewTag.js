// render in PhotoPage!!!!!!!
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector} from 'react-redux';
import { addTagToPhoto, renderPhotoTags } from '../store/tag';

const AddNewTag = ({id}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    // const {id} = useParams();
    // const [tag, setTag] = useState(null);
    const [name, setName] = useState("");

const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("id", id);
    setName("")

dispatch(addTagToPhoto(formData));
dispatch(renderPhotoTags())
history.push(`/photos/${id}`)
};

return (

    <div>

        <h2>Add a Tag</h2>
        <form onSubmit={handleSubmit}>
            <div class="form-input-container">
                <input
                    type="text"
                    className="form-input"
                    name="name"
                    placeHolder="Tag Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>

)
};

export default AddNewTag;
