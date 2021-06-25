// constants
const SET_TAGS = "tag/SET_TAGS";
const ADD_TAG = "tag/ADD_TAG";
const DELETE_TAG = "tag/DELETE_TAG";


// action creators

const setTags = (tag) => ({
    type: SET_TAGS,
    payload: tag
})

const addTag = (tag) => ({
    type: ADD_TAG,
    payload: tag
})

const deleteTag = (tag) => ({
    type: DELETE_TAG,
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
        const tagAddedToPhoto = await res.json();
        dispatch(addTag(tagAddedToPhoto))
        return tagAddedToPhoto;
    }
};

export const deleteOneTag = (id) => async(dispatch) => {
    const res = await fetch(`/api/tags/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id)
    });
    if(res.ok) {
        const tagDeleted = await res.json();
        dispatch(deleteTag(tagDeleted));
        return tagDeleted;
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
                [action.payload.id]: action.payload.tag
            };
            return addNewTag;
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
