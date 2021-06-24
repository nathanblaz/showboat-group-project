const SET_ALBUMS = "album/SET_ALBUMS";
const ADD_ALBUM = "album/ADD_ALBUM";
const SET_ONE_ALBUM = "album/SET_ONE_ALBUM";

const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    payload: albums
});

const addAlbum = (album) => ({
    type: ADD_ALBUM,
    payload: album
});

const setOneAlbum = (album) => ({
    type: SET_ONE_ALBUM,
    payload: album
});

//THUNKS
export const createAlbum = (formData) => async (dispatch) => {
    const res = await fetch("/api/albums/new", {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json"
        // },
        body: formData
    });
    if (res.ok) {
        const newAlbum = await res.json();
        dispatch(addAlbum(newAlbum))
        return newAlbum;
    } else {
        console.log("error--upload Album thunk (fetch call)")
    }
};

export const renderAllAlbums = () => async (dispatch) => {
    const res = await fetch("/api/albums")
    if (res.ok) {
        const data = await res.json();
        dispatch(setAlbums(data))
        return data;
    } else {
        console.log(res.statusText)
    }
}


const initialState = {};

export default function albumReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALBUMS:
            const newState = {};
            console.log("album reducer SET_ALBUMS: ", action.payload)
            action.payload.albums.forEach((album) => {
                newState[album.id] = album
            });
            return newState;
        case ADD_ALBUM:
            const plusState = {...state};
            console.log("album reducer ADD_ALBUM: ", action.payload);
            plusState[action.payload.id] = action.payload;
            return plusState;
        case SET_ONE_ALBUM:
            const oneAlbumState = {};
            console.log("album reducerSET_ONE_ALBUM: ", action.payload)
            oneAlbumState[action.payload.id] = action.payload;
            return oneAlbumState;
        default:
            return state;
    }
}
