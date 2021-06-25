import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteOneTag } from '../store/tag';

const DeleteATag = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const tags = useSelector(state => Object.values(state.tagReducer));
    console.log('********** TAGS ***********', tags)

    const singleTag = tags.filter(tag => {
        if (tag.id === Number(id)) return tag
    })
    console.log("************** single tag", singleTag)

    useEffect(() => {
        dispatch(deleteOneTag(Number(id)))
    }, [dispatch])

    const handleSubmit = async(e) => {
        // e.preventDefault();
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-input-container">
                    {singleTag[0]?.name}
                    <button type="submit">Delete</button>
                </div>
            </form>
        </div>
    )

}

export default DeleteATag
