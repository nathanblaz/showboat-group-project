import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import AlbumsPage from "../components/Album/AlbumsPage";
import ViewPhotos from "../components/file_upload/ViewPhotos";

function User() {
  const [user, setUser] = useState({});
  const [showAlbums, setShowAlbums] = useState(false);
  const [showPhotos, setShowPhotos] = useState(true);
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
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
          <img src={user?.avatar} className="user-page--avi" alt="avatar"/>
          <p>{user?.username}</p>
      </div>
      <ul className="navmenu" id="user-nav">
          <li className="navitem">
            <button type="button" className="user-page-button" onClick={photoButtonClick}>Your Photos</button>
          </li>
          <li className="navitem">
            <button type="button" className="user-page-button" onClick={albumButtonClick}>Your Albums</button>
          </li>
      </ul>
      {showAlbums && (
        <AlbumsPage />
      )}
      {showPhotos && (
        <ViewPhotos user={user} />
      )}
    </>
  );
}
export default User;
