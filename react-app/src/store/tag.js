// constants
const SET_TAGS = "tag/SET_TAGS";
const ADD_TAG = "tag/ADD_TAG";


// action creators

const setTags = (tag) => ({
    type: SET_TAGS,
    payload: tag
})

const addTag = (tag) => ({
    type: ADD_TAG,
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
            console.log("##############from store#########", action.payload)
            return addNewTag;

        }
        default:
            return state;
    }
}
