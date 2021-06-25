import React, { useState, useEffect } from "react";
import { Redirect, NavLink, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PhotoThumbnail from "./PhotoThumbnail";
import { renderAllAlbums, renderAlbumPhotos, deleteAlbum } from "../../store/album";
import { renderAllPhotos } from "../../store/photo";

const SingleAlbumPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const albumId = useParams().albumid;
    const user = useSelector(state => state.session.user)
    const albums = useSelector(state => Object.values(state.albumReducer));
    const photos = useSelector(state => Object.values(state.photoReducer));

    useEffect(() => {
        dispatch(renderAllAlbums());
        dispatch(renderAllPhotos());
    }, [dispatch])

    const thisAlbum = albums?.filter(album => album.id === (Number.parseInt(albumId)));
    const album = thisAlbum[0];
    console.log("album page", album);

    const [showForm, setShowForm] = useState(false);

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteAlbum(album?.id));
        // history.push({`/users/${user?.id}/albums`})
        // return <Redirect to={`/users/${user?.id}/albums`} />
    }

    const addPhotoForm = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <h1>{album?.title}</h1>
            <div>
                <button type="button">Edit Album</button>
                <button type="button" onClick={deleteHandler}>Delete Album</button>
                <button type="button" onClick={setShowForm}>Add Photos</button>
            </div>
            {showForm && (
                <form onSubmit={addPhotoForm}>
                    <select name="photos">
                        {photos.map(photo => <option value={photo.id}>{photo.title}</option>)}
                    </select>
                </form>
            )}
            <div className="uploaded--photo-container">
                <p>The photos in this album render as thumbnails here</p>
                {album?.id}
            </div>
        </>
    )
}

export default SingleAlbumPage;
