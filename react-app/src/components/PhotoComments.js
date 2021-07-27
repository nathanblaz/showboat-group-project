import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import {renderPhotoComments} from '../../src/store/comment'
import DeleteComment from './DeleteComment'
import EditCommentModal from './EditCommentModal'

import "./comments.css";

function PhotoComments() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const comments = useSelector(state => Object.values(state.commentReducer));
    // const photo = useSelector(state => state.photoReducer);
    const user = useSelector(state => state.session.user)
    // console.log('=================', typeof comments[0]?.user_id, typeof user.id)
    useEffect(()=> {
        dispatch(renderPhotoComments(Number(id)))
    }, [dispatch])

    const hoursAgo = (comment) => {
        let hours = Math.ceil(
          (Date.now() - Date.parse(comment?.created_at)) / 1000 / 60 / 60
        );
        if (hours === 1) {
          return "1 hour ago";
        } else if (hours < 24) {
          return `${hours} hours ago`;
        } else {
          return `${Math.ceil(hours / 24)} days ago`;
        }
      };


        return(
        <div id="comment-div">
            {comments?.map((comment) => (

            <div className="user-object" key={comment.id}>
                <img
                    src={comment?.user?.avatar}
                    className="user-object--avi"
                    alt="avatar"
                />
                <a className="user-object--user" href={`/users/${comment?.user_id}`}>
                    {comment?.username}
                </a>
                <p className="user-object--timestamp">{hoursAgo(comment)}</p>
                <div className="user-object--content">
                    {comment?.comment}

                    {comment?.user_id === user?.id
                    ?  <div className="button--buttons-container">
                        <DeleteComment comment={comment.id}/>
                        <EditCommentModal comment={comment}/>
                    </div>
                    : null
                    }
                </div>
            </div>)
            )}
        </div>
    )
}

export default PhotoComments;
