//constants
const SET_COMMENTS = "comment/SET_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENT";

//action creators
const setComments = (comment) => ({
    type: SET_COMMENTS,
    payload: comment,
});

//thunks
export const renderPhotoComments = () => async (dispatch) => {
    const res = await fetch("/api/comments");
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      dispatch(setComments(data.comments));
    }
  };

// reducer

const initialState = {};

export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COMMENTS:
            const newState = {};
            action.payload.forEach((comment) =>{
                newState[comment.id] = comment;
            })
            return newState;
        default:
            return state;
    }
}