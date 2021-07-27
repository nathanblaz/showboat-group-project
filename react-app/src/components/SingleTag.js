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
    console.log(tag, 'TAG FROM SINGLE TAG COMPONENT')
    const user = useSelector(state => state.session.user)
    console.log(user, 'USER FROM SINGLE TAG COMPONENT')

    useEffect(() => {
        dispatch(getOneTag(id))
    }, [dispatch, id])

    return (
        <div>
        <h2 id="single-tag-page">{tag.name}</h2>
        <br />
        {tag.user_id === user.id ?
            <div id="single-tag-buttons">
                <div>
                    <DeleteATag />
                    <UpdateTag />
                </div>
            </div>
            : null
    }
        </div>
    )
}

export default SingleTag;
