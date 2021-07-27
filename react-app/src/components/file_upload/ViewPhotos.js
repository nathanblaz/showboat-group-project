import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { renderAllPhotos } from "../../store/photo.js";
import PhotoThumbnail from "../Album/PhotoThumbnail";
import "./ViewPhoto.css";

const ViewPhotos = ({user}) => {
  const dispatch = useDispatch();
  const allPhotos = useSelector(state => Object.values(state.photoReducer));
  const photos = allPhotos?.filter(photo => photo.user_id === user?.id);
  // console.log(photos)

  useEffect(() => {
    dispatch(renderAllPhotos());
  }, [dispatch]);

  return (
    <div className="uploaded--photo-container">
        {photos?.map((photo) => (
          <PhotoThumbnail photo={photo} />
        ))}
    </div>
  );
};

export default ViewPhotos;
