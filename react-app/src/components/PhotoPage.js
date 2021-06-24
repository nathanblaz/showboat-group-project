import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import {renderOnePhoto} from '../../src/store/photo'
import PhotoComments from './PhotoComments'
import DeleteConfirmModal from './DeleteConfirmModal';

function PhotoPage() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const photo = useSelector(state => state.photoReducer);
    // console.log('photo from PhotoPage', photo)
    useEffect(()=>{
        dispatch(renderOnePhoto(Number(id)))
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
                <textarea placeholder='Comment' />
                <button type='submit'>
                    Post
                </button>
            </div>
            <PhotoComments/>

        </div>
    )

}
export default PhotoPage;
