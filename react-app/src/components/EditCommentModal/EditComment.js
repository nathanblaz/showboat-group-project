// import React, { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateComment, renderPhotoComments } from "../../store/comment";
 
// const EditComment = ({comment}) => {
//    const dispatch = useDispatch();
//    const {id} = useParams();
//    const [comments, setComment] = useState("");
//    const history = useHistory();
//    const [showModal, setShowModal] = useState(false);
  
//    const handleSubmit = async (e) => {
//        e.preventDefault();
//        comment.value = comment
//        const formData = new FormData();
//        formData.append('comment', comments);
//        await dispatch(updateComment(formData, comment.id));
//        console.log('id from post comment========', id)
//     //    setShowModal(false)
//     //    setComment('')
//        history.push(`/photos/${id}`);
//    }
  
//    useEffect(() => {
//        dispatch(renderPhotoComments(id))
//    }, [dispatch])
 
//    return(
//        <form onSubmit={handleSubmit}>
//        <textarea placeholder={comment.comment}
//        onChange={(e) => setComment(e.target.value)}
//        // value={comment}
//        />
//            <button type='submit' onClick={() => setShowModal(false)} >
//                       Submit Edit
//            </button>
//        </form>
//    )
// }
// export default EditComment