//constants
const SET_COMMENTS = "comment/SET_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENT";
const REMOVE_COMMENT = "comment/REMOVE_COMMENT";
const EDIT_COMMENT = 'comment/EDIT_COMMENT';


//action creators
const setComments = (comment) => ({
    type: SET_COMMENTS,
    payload: comment,
});

const postComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
})

const deleteComment = (comment) => ({
    type: REMOVE_COMMENT,
    payload: comment
})

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    payload: comment
 })
 

//thunks
export const renderPhotoComments = (photo_id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${photo_id}`);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      dispatch(setComments(data.comments));
    }
  };


export const addComment = (formData) => async (dispatch) => { //maybe add form data
    const res = await fetch("/api/comments/new", { //might need to add to the route
        method: "POST",
        body: formData
    });
    if (res.ok) {
        const addedComment = await res.json();
        dispatch(postComment(addedComment))
        return addedComment;
      }
};

export const removeComment = (id) => async (dispatch) => {
    const res = await fetch(`/api/comments/delete/${id}`, {
        method:"DELETE",
        body: JSON.stringify(id)
    })
    // console.log('id from comment.js=======', {id})
    if(res.ok) {
        const deletedComment = await res.json()
        dispatch(deleteComment(deletedComment))
        return deletedComment;
    }
}

export const updateComment = (formData, comment_id) => async (dispatch) => {
    const res = await fetch(`/api/comments/update/${comment_id}`, {
        method:"PUT",
        body: formData
    })
    if(res.ok) {
        const editedComment = await res.json()
        dispatch(editComment(editedComment))
        return editedComment;
    }
} 
 
// reducer

const initialState = {};

export default function commentReducer(state = initialState, action) {
    const newState = {...state};
    switch (action.type) {
        case SET_COMMENTS:
            action.payload.forEach((comment) =>{
                newState[comment.id] = comment;
            })
            return newState;

        case ADD_COMMENT:
            // const singleState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;

        case REMOVE_COMMENT:
            delete newState[action.payload.id]
            return newState;

        case EDIT_COMMENT:
            newState[action.payload.id] = action.payload;
            return newState;

        default:
            return state;
    }
}