import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { renderOnePhoto } from "../../src/store/photo";
import PhotoComments from "./PhotoComments";
import PhotoTagSidebar from "./PhotoTagSidebar";
import TagSelect from "./TagSelect";
import PostComment from "./PostComment";
import DeleteConfirmModal from "./DeleteConfirmModal";
import EditPhotoModal from "./EditPhotoModal";
import AddToAlbum from "./Album/AddToAlbum";

function PhotoPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const photo = useSelector((state) => state.photoReducer);
  const user = useSelector((state) => state.session.user);

  // console.log("photo from PhotoPage", photo);
  useEffect(() => {
    dispatch(renderOnePhoto(Number(id))); //this
  }, [dispatch, id]);

  const photoDate = new Date(photo?.date_taken);

  return (
    <div id="photo-page">

      <div className="photo--photo-column">

        <div className="photo--text-container">
          <h2>{photo?.title}</h2>
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

        </div>

      </div>

      <div className="photo--sidebar">

        <div className="photo--text-container">
            <Link to={`/users/${photo?.user_id}`}>{photo?.user?.username}</Link>
            <p>Date Taken: {photoDate.toDateString()}</p>
              <p>{photo?.caption}</p>
            <div className="button--buttons-container">
              <EditPhotoModal />
              <DeleteConfirmModal />
              <AddToAlbum photo={photo} />
            </div>
        </div>

        <div>Choose a tag from the dropdown, or add your own!</div>
        <br />
        <TagSelect id={id}/>
        <PhotoTagSidebar id={id} />

      </div>

    </div>
  );
}
export default PhotoPage;
