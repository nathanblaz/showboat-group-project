import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import {renderOnePhoto} from '../../src/store/photo'

function PhotoPage() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const photo = useSelector(state => Object.values(state.photoReducer));
    console.log('photo from PhotoPage', photo)
    useEffect(()=>{
        dispatch(renderOnePhoto(Number(id)))
    }, [dispatch])


    return (
        <div> 
            <div>
                {photo[0]?.title} 
            </div>
            <div>
                Date Taken: {photo[0]?.date_taken} 
            </div>
            <div>
                {photo[0]?.caption} 
            </div>
            <img src={photo[0]?.image_url} /> 
            <textarea placeholder='Comment' />
            <button type='submit'>
                        Post
            </button>
        </div>
    )
       
}
export default PhotoPage;