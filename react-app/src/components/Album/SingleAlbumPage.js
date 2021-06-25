import React, { useState, useEffect } from "react";
import { Redirect, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PhotoThumbnail from "./PhotoThumbnail";
import { renderAllAlbums, renderAlbumPhotos, deleteAlbum } from "../../store/album";

const SingleAlbumPage = () => {
    const dispatch = useDispatch();
    const albumId = useParams().albumid;
    const user = useSelector(state => state.session.user)
    const albums = useSelector(state => Object.values(state.albumReducer));

    useEffect(() => {
        dispatch(renderAllAlbums());
    }, [dispatch])

    const thisAlbum = albums?.filter(album => album.id === (Number.parseInt(albumId)));
    const album = thisAlbum[0];
    console.log("album page", album);


    // useEffect(() => {
    //     dispatch(renderAlbumPhotos(album));
    // }, [dispatch]);

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteAlbum(album?.id));
        return <Redirect to={`/users/${user?.id}/albums`} />
    }

    return (
        <>
            <h1>{album?.title}</h1>
            <div>
                <button type="button">Edit Album</button>
                <button type="button" onClick={deleteHandler}>Delete Album</button>
            </div>
            <div className="uploaded--photo-container">
                <p>The photos in this album render as thumbnails here</p>
                {album?.id}
            </div>
        </>
    )
}

export default SingleAlbumPage;
