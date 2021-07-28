import React, { useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {renderUserAlbums} from "../../store/album";

import "./album.css";
import placeholder from "./placeholder-img.jpeg";

const AlbumsPage = () => {
    const dispatch = useDispatch();
    const albums = useSelector(state => Object.values(state.albumReducer));
    const user = useSelector(state => state.session.user);

    const {userId} = useParams();
    const pageOwnerId = parseInt(userId);

    console.log(pageOwnerId)

    useEffect(() => {
        dispatch(renderUserAlbums(pageOwnerId));
    }, [dispatch, pageOwnerId]);

    // console.log(albums)

    return albums && (
        <>
            {user?.id === pageOwnerId ?
                <div className="album-title">
                    <h2>Your Albums</h2>
                    <button type="button" id="create-album-button">
                        <NavLink to={`/users/${user?.id}/albums/new`}>Create An Album</NavLink>
                    </button>
                </div> : <div className="album-title">
                    <h2>Albums</h2>
                </div>
            }
            <div className="uploaded--photo-container">
                {albums?.map((album) =>
                        <div className="album-list">
                            <NavLink to={`/users/${user?.id}/albums/${album?.id}`} album={album}>
                                {album?.title}
                            </NavLink>
                            {album.photos[0] ? <img className="album-thumb" src={album.photos[0]?.image_url} alt="first photo in this album" /> : <img className="album-thumb" src={placeholder} alt="this album is empty" />}
                        </div>
                )}
            </div>
        </>
    )
}

export default AlbumsPage;
