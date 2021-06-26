import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uploadPhoto } from "../../store/photo";
import "./EditPhoto.css";

const EditPhoto = () => {
  const history = useHistory(); // so that we can redirect after the photo upload is successful
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [dateTaken, setDateTaken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("caption", caption);
    formData.append("date_taken", dateTaken);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea

    dispatch(uploadPhoto(formData));
    history.push(`/users/${user.id}/photos`); // implicitly conditional
  };

  return (
    <div className="card">
      <h2>Edit Photo Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <input
            type="text"
            className="form-input"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
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
      </form>
    </div>
  );
};

export default EditPhoto;
