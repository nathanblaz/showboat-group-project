import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderAllPhotos } from "../../store/photo.js";
import "./ViewPhoto.css";

const ViewPhotos = () => {
  // const [photos, setPhotos] = useState([]);
  const dispatch = useDispatch();
  const photos = useSelector(state => Object.values(state.photoReducer));

  useEffect(() => {
    dispatch(renderAllPhotos());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <h1>Photos</h1>
      <div className="uploaded--photo-container">
        {photos?.map((photo) => (
            <img className="uploaded--photo" src={`${photo?.image_url}`}></img>
        ))}
      </div>
    </div>
  );
};

export default ViewPhotos;
