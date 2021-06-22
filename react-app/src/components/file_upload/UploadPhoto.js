import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uploadPhoto } from "../../store/photo";

const UploadPhoto = () => {
  const history = useHistory(); // so that we can redirect after the photo upload is successful
  const [photoLoading, setPhotoLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);

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
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={updatePhoto} />
      <button type="submit">Submit</button>
      {photoLoading && <p>Loading...</p>}
    </form>
  );
};

export default UploadPhoto;
