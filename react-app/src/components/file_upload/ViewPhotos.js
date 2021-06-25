import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { renderAllPhotos } from "../../store/photo.js";
import PhotoThumbnail from "../Album/PhotoThumbnail";
import "./ViewPhoto.css";

const ViewPhotos = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => Object.values(state.photoReducer));

  useEffect(() => {
    dispatch(renderAllPhotos());
  }, [dispatch]);

  return (
    <div className="uploaded--photo-container">
      <h1>Photos</h1>
        {photos?.map((photo) => (
          <PhotoThumbnail photo={photo} />
        ))}
    </div>
  );
};

export default ViewPhotos;
