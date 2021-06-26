import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import {renderPhotoComments} from '../../src/store/comment'
import DeleteComment from './DeleteComment'
import EditComment from './EditComment'

function PhotoComments() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const comments = useSelector(state => Object.values(state.commentReducer));
    // const photo = useSelector(state => state.photoReducer);

    useEffect(()=> {
        dispatch(renderPhotoComments(Number(id)))
    }, [dispatch])

    return(
        <div> Stuff 
            {comments?.map((comment) => (
            
            <div key={comment.id}>
                    Comments: {comment?.comment} 
                    User: {comment?.username}
                    <DeleteComment comment={comment.id}/>
                    <EditComment comment={comment}/>
            </div>)
            
            )}
        </div>
    )
}

export default PhotoComments;