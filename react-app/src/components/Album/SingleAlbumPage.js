import React, { useState, useEffect } from "react";
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PhotoThumbnail from "./PhotoThumbnail";
// import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirm";
import { editAlbum, renderAlbumPhotos, deleteAlbum } from "../../store/album";
import { renderAllPhotos } from "../../store/photo";

const SingleAlbumPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const albumId = useParams().albumid; // the URL includes user ID and photo ID, need to specify which slug
    const albumAndPhoto = useSelector(state => Object.values(state.albumReducer));


    useEffect(() => {
        dispatch(renderAlbumPhotos(Number(albumId)));
    }, [dispatch])

    let album;
    if (albumAndPhoto) { album =  albumAndPhoto[0] } else {
        dispatch(renderAlbumPhotos(Number(albumId)));
    };
    let photos;
    if (albumAndPhoto) { photos =  albumAndPhoto[1] } else {
        dispatch(renderAlbumPhotos(Number(albumId)));
    };
    console.log("album page", albumAndPhoto);

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState(album?.title);
    const [description, setDescription] = useState(album?.description);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("user_id", user.id);

        dispatch(editAlbum(formData, Number(albumId)))
    };

    const cancelClick = (e) => {
        setShowForm(false)
    };

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteAlbum(album?.id));
        history.push(`/users/${user.id}/albums`);
    };

    // const addPhotoForm = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("add_photo", addPhoto)
    // }

    return (
        <>
            <h1>{album?.title}</h1>
            <p>{album?.description}</p>
            <div>
                <button type="button" onClick={setShowForm}>Edit Album Details</button>
                <button type="button" onClick={deleteHandler}>Delete Album</button>
                {/* <button type="button" onClick={setShowForm}>Add Photos</button> */}
            </div>
            {showForm && (
                        <div className="card">
                        <form onSubmit={handleSubmit}>
                        <div className="form-input-container">
                            <input
                            type="text"
                            className="form-input"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title} />
                            <textarea
                            name="description"
                            className="form-input"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description} />
                        </div>
                        <button type="submit" id="loginBtn">Submit</button>
                        <button type="button" id="loginBtn" onClick={cancelClick}>Cancel</button>
                        </form>
                        </div>
            )}

            {/* {showForm && (
                <form onSubmit={addPhotoForm}>
                    <select name="photos" value={addPhoto} onChange={(e) => setAddPhoto(e.target.value)}>
                        {photos?.map(photo =>
                            <option value={photo?.id}>{photo?.title}: {photo?.id}</option>)}
                    </select>
                    <button>Add</button>
                </form>
            )} */}
            {photos ? (<div className="uploaded--photo-container">
                {photos?.map(photo => <PhotoThumbnail photo={photo} />)}
            </div>) : null}

        </>
    )
}

export default SingleAlbumPage;
