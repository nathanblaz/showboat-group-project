import React, { useState, useEffect} from 'react';
import { Modal } from '../../context/Modal';
// import EditComment from './EditComment';

import { useHistory, useParams } from "react-router-dom"; //!this
import { useDispatch, useSelector } from "react-redux";
import { updateComment, renderPhotoComments } from "../../store/comment";

function EditCommentModal({comment}) {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();//!this
    const {id} = useParams();
    const [comments, setComment] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => { //!this
        e.preventDefault();
        // comment.value = comment
        const formData = new FormData();
        formData.append('comment', comments);
        await dispatch(updateComment(formData, comment.id));
        console.log('id from post comment========', id)
        setShowModal(false)
     //    setComment('')
        // history.push(`/photos/${id}`);
    }
    
    useEffect(() => {
        dispatch(renderPhotoComments(id))
    }, [dispatch])

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Comment</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {/* <EditComment comment={comment}/> */}
                    <form onSubmit={handleSubmit}> 
                        <textarea placeholder={comment.comment}
                        onChange={(e) => setComment(e.target.value)}/>
                        <button type='submit'  
                        // onSubmit={() => setShowModal(false)}  
                        >
                                    Submit Edit
                        </button>
                    </form>
                </Modal>
            )}
        </>
    )
}

export default EditCommentModal;
