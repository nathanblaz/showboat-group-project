import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import {renderOnePhoto} from '../../src/store/photo'
import PhotoComments from './PhotoComments'
import AddNewTag from './AddNewTag';

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
            <img src={photo?.image_url} />
            <textarea placeholder='Comment' />
            <button type='submit'>
                        Post
            </button>
            <PhotoComments/>
        </div>
    )

}
export default PhotoPage;
