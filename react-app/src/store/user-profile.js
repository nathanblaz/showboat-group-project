// constants
const SET_USER = "session/SET_USER"

// action creators
const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

export const getAUser = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();
    if (res.ok) {
        dispatch(setUser(data));
    } else {
        console.log(res.statusText)
    }
};

const initialState = {user: null}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...action.payload}
        default:
            return state;
    }
};
