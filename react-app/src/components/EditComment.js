import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateComment, renderPhotoComments } from "../../src/store/comment";
 
const EditComment = ({comment}) => {
   const dispatch = useDispatch();
   const {id} = useParams();
   const user = useSelector(state => state.session.user);
  
   const [comments, setComment] = useState("");
   // console.log('user from post comment', user)
  
   const handleSubmit = async (e) => {
       e.preventDefault();
      
       comment.value = comment
       console.log('comment.value from edit comment', comments.id)
       const formData = new FormData();
       formData.append('comment', comments);
    //    formData.append('photo_id', photo.id);
    //    formData.append('user_id', user.id)
      console.log("form data=======", comment)
       await dispatch(updateComment(formData, comment.id));
       // console.log('photo from post comment========', photo)
       setComment('')
   }
  
   useEffect(() => {
       dispatch(renderPhotoComments(id))
   }, [dispatch])
 
   return(
       <form onSubmit={handleSubmit}>
       <textarea placeholder={comment.comment}
       onChange={(e) => setComment(e.target.value)}
       // value={comment}
       />
           <button type='submit'>
                       Edit
           </button>
       </form>
   )
}
export default EditComment