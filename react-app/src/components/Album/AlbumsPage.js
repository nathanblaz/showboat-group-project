import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
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
            <h1>All Your Albums In One Place</h1>
            <NavLink to={`/users/${user?.id}/albums/new`} >Create An Album</NavLink>
            <div className="uploaded--photo-container">
                <h2>Thumbnails representing albums here</h2>
                {albums?.map((album) => <div><NavLink to={`/users/${user?.id}/albums/${album?.id}`}>{album?.title}{typeof `${album?.id}`}</NavLink></div>)}
            </div>
        </>
    )
}

export default AlbumsPage;
