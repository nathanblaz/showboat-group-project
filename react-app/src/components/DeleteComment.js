import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import{useParams, useHistory} from 'react-router-dom'
import {removeComment, renderPhotoComments} from '../store/comment'

const DeleteComment = ({comment}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const comments = useSelector(state => Object.values(state.commentReducer));
    // const singleComment = comments.filter(comment => {
    //     if (comment.photo_id === comment.id) return comment
    //     console.log('comment from delete comments', comment.id)
    // })
    // console.log('singlecomment from delete comments', singleComment)
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('comment from delelt comments', comment)
        await dispatch(removeComment(comment))
        // console.log('deleted event', singleComment.id)
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