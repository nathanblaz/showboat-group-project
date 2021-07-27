// render in PhotoPage!!!!!!!
// import React, { useState } from 'react';
// import { useHistory } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTagToPhoto, renderPhotoTags } from '../store/tag';

// //css is in auth.css

// const AddNewTag = ({id}) => {
//     const history = useHistory();
//     const dispatch = useDispatch();

//     const [name, setName] = useState("");
//     const user = useSelector(state => state.session.user)
//     console.log(user, "USER FROM ADD NEW TAG COMPONENT")

// const handleSubmit = async(e) => {
//     e.preventDefault();
//     if(name === ''){
//         alert("Field cannot be blank")
//     } else {
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("id", id);
        // formData.append("user_id", user.id);
//         console.log(id, 'ID FROM ADDNEWTAG COMPONENT')
//         setName("")

//         dispatch(addTagToPhoto(formData));
//         dispatch(renderPhotoTags());
//         history.push(`/photos/${id}`)
//     }
//     };

// return (

//     <div>

//         <h2>Add a Tag</h2>
//         <form onSubmit={handleSubmit}>
//             <div class="form-input-container" id='tag-bar'>
//                 <input
//                     type="text"
//                     className="form-input"
//                     name="name"
//                     placeholder="Tag Name"
//                     onChange={(e) => setName(e.target.value)}
//                     value={name} />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     </div>

// )
// };

// export default AddNewTag;
