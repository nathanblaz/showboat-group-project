// constants
const SET_PROFILE = "session/SET_USER"

// action creators
const setProfile = (user) => ({
    type: SET_PROFILE,
    payload: user
});

export const getAUser = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();
    if (res.ok) {
        dispatch(setProfile(data));
    } else {
        console.log(res.statusText)
    }
    console.log("inside getAUser thunk", id, data)
    return data;
};

const initialState = {user: null}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE:
            return {...action.payload}
        default:
            return state;
    }
};
