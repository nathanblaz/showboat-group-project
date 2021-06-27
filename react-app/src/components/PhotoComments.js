import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import {renderPhotoComments} from '../../src/store/comment'
import DeleteComment from './DeleteComment'
import EditCommentModal from './EditCommentModal'

function PhotoComments() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const comments = useSelector(state => Object.values(state.commentReducer));
    // const photo = useSelector(state => state.photoReducer);
    const user = useSelector(state => state.session.user)
    console.log('=================', typeof comments[0]?.user_id, typeof user.id)
    useEffect(()=> {
        dispatch(renderPhotoComments(Number(id)))
    }, [dispatch])

    
        return(
        <div> User Comments
            {comments?.map((comment) => (
                
                <div key={comment.id}>
                <div>
                    Comments: {comment?.comment} 
                </div>
                <div>
                    User: {comment?.username}
                </div>

                {comment?.user_id === user?.id 
                ?  <div>
                    <DeleteComment comment={comment.id}/>
                    <EditCommentModal comment={comment}/>   
                 </div>
                 : null
            }
            </div>)
            )}
        </div>
    )    
}

export default PhotoComments;