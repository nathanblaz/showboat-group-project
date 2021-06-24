import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import {renderPhotoComments} from '../../src/store/comment'


function PhotoComments() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const comments = useSelector(state => Object.values(state.commentReducer));

    useEffect(()=> {
        dispatch(renderPhotoComments(id))
    }, [dispatch])

    return(
        <div> Stuff 
            {comments?.map((comment) => (
            
            <div key={comment.id}>
                    Comments: {comment?.comment} 
                    User: {comment?.username}
            </div>)
            
            )}
        </div>
    )
}

export default PhotoComments;