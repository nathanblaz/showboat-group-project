import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { deleteAlbum } from "../../store/album";

const DeleteAlbum = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user);
    const albumId = useParams().albumid;

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteAlbum(Number(albumId)));
        history.push(`/users/${user.id}/albums`);
    };

    return (
        <div className="modal--delete-confirm">
        Are you sure you want to delete this album?
        <button className="modal--button-div" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    )
}

export default DeleteAlbum;
