import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UploadPhoto = () => {
  const history = useHistory(); // so that we can redirect after the photo upload is successful
  const [photo, setPhoto] = useState(null);
  const [photoLoading, setPhotoLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea

    setPhotoLoading(true);
    const res = await fetch("/api/photos", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      await res.json();
      setPhotoLoading(false);
      history.push("/photos");
    } else {
      setPhotoLoading(false);
      console.log("error");
    }
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
