import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneTag } from '../store/tag';
import DeleteATag from './DeleteATag';
import UpdateTag from './UpdateTag';
import TagSidebar from './TagSidebar';

const SingleTag = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const tag = useSelector(state => state.tagReducer);
    console.log(tag, 'TAG FROM SINGLE TAG COMPONENT')

    useEffect(() => {
        dispatch(getOneTag(id))
    }, [dispatch, id])

    return (
        <div>
        {tag.name}
        {tag.}
        <DeleteATag />
        <UpdateTag />
        <TagSidebar />
        </div>
    )
}

export default SingleTag;
