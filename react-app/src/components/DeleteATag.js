import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteOneTag } from '../store/tag';

const DeleteATag = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const tags = useSelector(state => Object.values(state.tagReducer));

    const singleTag = tags.filter(tag => {
        if (tag.id === Number(id)) return tag
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(deleteOneTag(Number(id)))
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-input-container" id='tag-bar-delete'>
                    {singleTag[0]?.name}
                    <button type="submit">Delete</button>
                </div>
            </form>
        </div>
    )

}

export default DeleteATag
