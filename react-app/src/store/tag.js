// constants
const SET_TAGS = "tag/SET_TAGS";
export const ADD_TAG = "tag/ADD_TAG";
const DELETE_TAG = "tag/DELETE_TAG";
export const UPDATE_TAG = "tag/UPDATE_TAG";
const GET_TAG = "tag/GET_TAG";


// action creators

const setTags = (tag) => ({
    type: SET_TAGS,
    payload: tag
});

const addTag = (tag) => ({
    type: ADD_TAG,
    payload: tag
});

const deleteTag = (tag) => ({
    type: DELETE_TAG,
    payload: tag
});

const editTag = (tag) => ({
    type: UPDATE_TAG,
    payload: tag
});

const getTag = (tag) => ({
    type: GET_TAG,
    payload: tag
})


// thunks

export const renderPhotoTags = () => async(dispatch) => {
    const res = await fetch("/api/tags");
    if(res.ok) {
        const data = await res.json();
        dispatch(setTags(data.tags));
    }
}

export const addOneTag = (formData) => async(dispatch) => {
    const res = await fetch("/api/tags/new", {
        method: 'POST',
        body: formData
    });
    if (res.ok){
        const tagAdded = await res.json();
        // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", tagAdded)
        dispatch(addTag(tagAdded))
        return tagAdded;
    }
};

export const addTagToPhoto = (formData) => async(dispatch) => {
    const res = await fetch("/api/tags/photo/new_tag", {
        method: 'POST',
        body: formData
    });
    if (res.ok){
        const photoAndTag = await res.json();
        dispatch(addTag(photoAndTag))
        return photoAndTag;
    }
};

export const addExistingTagToPhoto = (formData) => async(dispatch) => {
    const res = await fetch('/api/tags/existing_tag', {
        method: 'POST',
        body: formData
    });
    if(res.ok){
        const existingTagAdded = await res.json();
        dispatch(addTag(existingTagAdded));
        return existingTagAdded;
    }
}

export const deleteOneTag = (id) => async(dispatch) => {
    const res = await fetch(`/api/tags/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id)
    });
    if(res.ok) {
        const tagDeleted = await res.json();
        dispatch(deleteTag(tagDeleted));
        return tagDeleted;
    }
}

export const getOneTag = (id) => async (dispatch) => {
    const res = await fetch(`/api/tags/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(getTag(data));
        return data
    }
}

export const updateTag = (formData, id) => async (dispatch) => {
    if (id === undefined) console.log("ID IS UNDEFINED")
    const res = await fetch(`/api/tags/update/${id}`, {
        method: 'PUT',
        body: formData,
    })
    if(res.ok) {
        const updatedTag = await res.json()
        dispatch(updateTag(updatedTag))
        return updatedTag
    }
}

// initial state
const initialState = {};

// reducer

export default function tagReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TAGS:
            const allTagsState = {};
            action.payload.forEach(tag => {
                allTagsState[tag.id] = tag;
            })
            return allTagsState;
        case ADD_TAG:{
            const addNewTag = {
                ...state,
                [action.payload.tag.id]: action.payload.tag
            };
            return addNewTag;
        }
        case GET_TAG: {
            const oneTag = {
                ...action.payload
            }
            return oneTag;
        }
        case UPDATE_TAG:{
            const updateATag = {
                ...state,
                [action.payload.tag.id]: action.payload.tag
            }
            return updateATag;
        }
        case DELETE_TAG:
            const deleteATag = {...state};
            delete deleteATag[action.payload.id]
            console.log(deleteATag, "*******************reducer")
            return {...deleteATag}
        default:
            return state;
    }
}
