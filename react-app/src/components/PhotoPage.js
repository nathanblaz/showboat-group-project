import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { renderOnePhoto } from "../../src/store/photo";
import PhotoComments from "./PhotoComments";
import AddNewTag from "./AddNewTag";
import PhotoTagSidebar from "./PhotoTagSidebar";
import PostComment from "./PostComment";
import EditComment from "./EditComment";
// import DeleteComment from './DeleteComment'
import DeleteConfirmModal from "./DeleteConfirmModal";
import EditPhotoModal from "./EditPhotoModal";
import AddToAlbum from "./Album/AddToAlbum";

function PhotoPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const photo = useSelector((state) => state.photoReducer);
  const user = useSelector((state) => state.session.user);

  console.log("photo from PhotoPage", photo);
  useEffect(() => {
    dispatch(renderOnePhoto(Number(id))); //this
  }, [dispatch, id]);

  return (
    <div id="photo-page">
      <div className="photo--text-container">
        <p>{photo?.title}</p>
        <p>Date Taken: {photo?.date_taken}</p>
        <p>{photo?.caption}</p>
        <EditPhotoModal />
      </div>
      <div className="photo--photo-container">
        <img
          className="photo-page--photo"
          src={photo?.image_url}
          alt={`${photo.title}`}
        />
      </div>
      <div className="under-photo">
        <div className="photo--comment-container">
          <PostComment photo={photo} />
          <div>
            <PhotoComments photo={photo} />
            {/* <EditComment/> */}
            {/* <DeleteComment/> */}
          </div>
        </div>
        <div className="button--buttons-container">
          <DeleteConfirmModal />
          <AddToAlbum photo={photo} />
        </div>
      </div>
      <div className="photo--sidebar">
        <AddNewTag id={id} />
        <PhotoTagSidebar id={id} />
      </div>
    </div>
  );
}
export default PhotoPage;
