import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { getAUser } from "../store/user-profile"
import { renderAllPhotos } from "../store/photo";
import AlbumsPage from "../components/Album/AlbumsPage";
import ViewPhotos from "../components/file_upload/ViewPhotos";

function User() {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [showAlbums, setShowAlbums] = useState(false);
  const [showPhotos, setShowPhotos] = useState(true);

  //get the ID of the user whose profile we're on, in case it is someone else's profile
  const { userId }  = useParams();
  const pageOwnerId = parseInt(userId);

  useEffect(() => {
    dispatch(renderAllPhotos());
  }, [dispatch]);

  const allPhotos = useSelector(state => Object.values(state.photoReducer));
  let photos;
  let profileUser;

  if (user.id !== pageOwnerId) {
    photos = allPhotos?.filter(photo => photo.user_id === pageOwnerId);
    profileUser = photos[0]?.user;
    console.log(profileUser)
  } else  {
    photos = allPhotos?.filter(photo => photo.user_id === user.id);
    profileUser = user;
  }

  const photoButtonClick = () => {
    setShowPhotos(true);
    setShowAlbums(false);
  };

  const albumButtonClick = () => {
    setShowAlbums(true);
    setShowPhotos(false);
  }

  return (
    <>
      <div className="user-header">
          <img src={profileUser?.avatar} className="user-page--avi" alt="avatar"/>
          <p>{profileUser?.username}</p>
      </div>
      {user?.id === pageOwnerId ?
        <ul className="navmenu" id="user-nav">
            <li className="navitem">
              <button type="button" className="user-page-button" onClick={photoButtonClick}>Your Photos</button>
            </li>
            <li className="navitem">
              <button type="button" className="user-page-button" onClick={albumButtonClick}>Your Albums</button>
            </li>
        </ul> :
        <ul className="navmenu" id="user-nav">
          <li className="navitem">
            <button type="button" className="user-page-button" onClick={photoButtonClick}>Photos</button>
          </li>
          <li className="navitem">
            <button type="button" className="user-page-button" onClick={albumButtonClick}>Albums</button>
          </li>
        </ul>}
      {showAlbums && (
        <AlbumsPage />
      )}
      {showPhotos && (
        <ViewPhotos user={profileUser} />
      )}
    </>
  );
}
export default User;
