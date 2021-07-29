import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAUser } from "../store/user-profile"
import AlbumsPage from "../components/Album/AlbumsPage";
import ViewPhotos from "../components/file_upload/ViewPhotos";

function User() {
  const user = useSelector(state => state.session.user);
  const profileUser = useSelector(state => state.userProfile);
  const dispatch = useDispatch();

  const [showAlbums, setShowAlbums] = useState(false);
  const [showPhotos, setShowPhotos] = useState(true);

  //get the ID of the user whose profile we're on, in case it is someone else's profile
  const { userId }  = useParams();
  const pageOwnerId = parseInt(userId);

  useEffect(() => {
    console.log("get A User dispatch", user, userId)
      dispatch(getAUser(pageOwnerId));
  }, [dispatch, pageOwnerId]);

  const photoButtonClick = () => {
    setShowPhotos(true);
    setShowAlbums(false);
  };

  const albumButtonClick = () => {
    setShowAlbums(true);
    setShowPhotos(false);
  }

  return profileUser && (
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
