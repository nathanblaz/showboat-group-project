import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {renderAllAlbums} from "../../store/album";
import "./album.css";

const AlbumsPage = () => {
    const dispatch = useDispatch();
    const albums = useSelector(state => Object.values(state.albumReducer));
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(renderAllAlbums());
    }, [dispatch]);

    return (
        <>
        <div className="album-title">
            <h1>Your Albums</h1>
        </div>
            <button type="button" id="create-album-button">
                <NavLink to={`/users/${user?.id}/albums/new`}>Create An Album</NavLink>
            </button>
            <div className="uploaded--photo-container">
                {albums?.map((album) => <div className="album-list"><NavLink to={`/users/${user?.id}/albums/${album?.id}`} album={album}> {album?.title}</NavLink></div>)}
            </div>
        </>
    )
}

export default AlbumsPage;
