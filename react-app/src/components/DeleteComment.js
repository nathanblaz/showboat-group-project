import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import{useParams, useHistory} from 'react-router-dom'
import {removeComment, renderPhotoComments} from '../store/comment'

const DeleteComment = ({comment}) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    // const comments = useSelector(state => Object.values(state.commentReducer));
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        await dispatch(removeComment(comment))
        console.log('deleted comment', comment)
        console.log(id)
        history.push(`/photos/${id}`)
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