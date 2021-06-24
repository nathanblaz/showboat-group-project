import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAlbum } from "../../store/album";
import photoReducer from "../../store/photo";

const CreateAlbum = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    // const photoState = useSelector(state => Object.values(photoReducer));
    // const myPhotos = photoState.filter(photo => photo.id === user.id);
    // console.log("my photos:", myPhotos)
    // console.log("photo state:", photoState)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // const [photos, setPhotos] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("user_id", user.id);

        dispatch(createAlbum(formData))
    }

    return (
        <>
        <h1>Create Album Form</h1>
        <div className="card">
            <form onSubmit={handleSubmit}>
            <div className="form-input-container">
                <input
                type="text"
                className="form-input"
                name="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title} />
                {/* <label className="form-input">
                <input
                type="select"
                name="file_upload"
                onChange={setPhotos} />
                </label> */}
                <textarea
                name="description"
                className="form-input"
                placeholder="What's this album about?"
                onChange={(e) => setDescription(e.target.value)}
                value={description} />
            </div>
            <button type="submit" id="loginBtn">Submit</button>
            </form>
        </div>
    </>
    )
}

export default CreateAlbum;
