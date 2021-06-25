import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import {renderOnePhoto} from '../../src/store/photo'
import PhotoComments from './PhotoComments'
import AddNewTag from './AddNewTag';
import PhotoTagSidebar from './PhotoTagSidebar';
import PostComment from './PostComment'
import EditComment from './EditComment'
// import DeleteComment from './DeleteComment'
import DeleteConfirmModal from './DeleteConfirmModal';

function PhotoPage() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const photo = useSelector(state => state.photoReducer);
    const user = useSelector(state => state.session.user);

    console.log('photo from PhotoPage', photo)
    useEffect(()=>{
        dispatch(renderOnePhoto(Number(id))) //this
    }, [dispatch])


    return (
        <div>
            <div>
                {photo?.title}
            </div>
            <div>
                Date Taken: {photo?.date_taken}
            </div>
            <div>
                {photo?.caption}
            </div>
            <div className="photo--photo-container">
                <img src={photo?.image_url} />
            </div>
            <div className="button--buttons-container">
                <DeleteConfirmModal/>
            </div>

            <div className="photo--comment-container">
                <PostComment photo={photo}/>
                <div>
                    <PhotoComments photo={photo}/>
                    {/* <EditComment/> */}
                    {/* <DeleteComment/> */}
                </div>
            </div>
            <AddNewTag id={id} />
            <PhotoTagSidebar id={id} />
        </div>
    )

}
export default PhotoPage;
