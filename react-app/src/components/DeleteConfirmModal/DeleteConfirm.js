import React, { useState } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { deletePhoto } from "../../store/photo";
import './DeleteConfirm.css';

    
const DeleteConfirm = (photo) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log ('id is', id);
    console.log ('id type is', typeof id);

    const handleSubmit = async (e) => {
        console.log('here I am in the handleSubmit');
        e.preventDefault();
        // await dispatch(deletePhoto(id));
        console.log('Deleted event!');
        history.push('/');
    }

    return (
        <div className="modal--delete-confirm">
            Are you sure you want to delete this photo?
            <button className="modal--button-div" onClick={handleSubmit}>Delete</button>
        </div>
    )
}

export default DeleteConfirm;
