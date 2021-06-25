// render in PhotoPage!!!!!!!
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import { useDispatch, useSelector} from 'react-redux';
import { addOneTag, renderPhotoTags } from '../store/tag';

const AddNewTag = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {id} = useParams();
    const [tag, setTag] = useState(null);
    const [name, setName] = useState("");

const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);

dispatch(addOneTag(formData));
dispatch(renderPhotoTags())
history.push("/photo/:id")
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
