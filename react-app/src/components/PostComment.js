import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment, renderPhotoComments, } from "../../src/store/comment";

const PostComment = ({photo}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const user = useSelector(state => state.session.user);

    const [comment, setComment] = useState("");
    // console.log('user from post comment', user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(comment === ''){
            alert('Comment field can not be blank')
        } else{
            const formData = new FormData();
            formData.append('comment', comment);
            formData.append('photo_id', photo.id);
            formData.append('user_id', user.id)
            await dispatch(addComment(formData));
            // console.log('photo from post comment========', photo)
            setComment('')
        }

    }

    useEffect(() => {
        dispatch(renderPhotoComments(id))
    }, [dispatch])

    return(
        <form onSubmit={handleSubmit}>
        <textarea className="form-input" placeholder='Comment'
        onChange={(e) => setComment(e.target.value)}
        value={comment} />
            <button type='submit'>
                        Post
            </button>
        </form>
    )
}

export default PostComment
