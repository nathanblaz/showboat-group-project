import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneTag } from '../store/tag';
import DeleteATag from './DeleteATag';
import UpdateTag from './UpdateTag';

const SingleTag = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const tag = useSelector(state => state.tagReducer);

    useEffect(() => {
        dispatch(getOneTag(id))
    }, [dispatch, id])

    return (
        <div>
        {tag.name}
        {/* <DeleteATag /> */}
        {/* <UpdateTag /> */}
        </div>
    )
}

export default SingleTag;
