import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import{useParams, useHistory} from 'react-router-dom'
import {removeComment, renderPhotoComments} from '../store/comment'

const DeleteComment = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const handleSubmit = async(e) => {
        e.preventDefault();

        await dispatch(removeComment(id))
        console.log('deleted event', id)
    }
    useEffect(() => {
        dispatch(renderPhotoComments(id))
    }, [dispatch])

    return(
        <button onClick={handleSubmit}>
            Delete
        </button>
    )
}

export default DeleteComment;