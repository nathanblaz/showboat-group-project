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

    console.log(albums)

    return (
        <>
        <div className="album-title">
            <h2>Your Albums</h2>
            <button type="button" id="create-album-button">
                <NavLink to={`/users/${user?.id}/albums/new`}>Create An Album</NavLink>
            </button>
        </div>
            <div className="uploaded--photo-container">
                {albums?.map((album) => <div className="album-list">
                        {album.photos[0] ? <img className="album-thumb" src={album.photos[0].image_url} /> : <img className="album-thumb" src="react-app/src/example-images/placeholder-img.jpeg" />}
                        <NavLink to={`/users/${user?.id}/albums/${album?.id}`} album={album}> {album?.title}</NavLink>
                    </div>)}
            </div>
        </>
    )
}

export default AlbumsPage;
