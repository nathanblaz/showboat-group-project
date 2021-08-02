import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uploadPhoto } from "../../store/photo";
import "./UploadPhoto.css";

const UploadPhoto = () => {
  const history = useHistory(); // so that we can redirect after the photo upload is successful
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [photoLoading, setPhotoLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [dateTaken, setDateTaken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("title", title);
    formData.append("caption", caption);
    formData.append("date_taken", dateTaken);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setPhotoLoading(true);

    dispatch(uploadPhoto(formData));
    setPhotoLoading(false); // implicitly conditional
    history.push(`/users/${user.id}/photos`); // implicitly conditional
  };

  const updatePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <>
      <div id="card-id">

      </div>

      <div className="card">
        <h2>Upload a Photo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input-container">
            <input
              type="text"
              className="form-input"
              name="title"
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label className="form-input">
              <input
                type="file"
                accept="image/*"
                name="file_upload"
                onChange={updatePhoto}
                required
              />
            </label>
            <textarea
              name="caption"
              className="form-input"
              placeholder="Caption your photo..."
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
            />
            <input
              type="date"
              name="date_taken"
              className="form-input"
              onChange={(e) => setDateTaken(e.target.value)}
              value={dateTaken}
            />
          </div>
          <button type="submit" id="loginBtn">
            Submit
          </button>
          {photoLoading && <p>Loading...</p>}
        </form>
      </div>
    </>
  );
};

export default UploadPhoto;
