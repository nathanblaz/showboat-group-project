const SET_ALBUMS = "album/SET_ALBUMS";
const ADD_ALBUM = "album/ADD_ALBUM";
const SET_ONE_ALBUM = "album/SET_ONE_ALBUM";
const DELETE_ALBUM = "album/DELETE_ALBUM";

const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    payload: albums
});

const addAlbum = (album) => ({
    type: ADD_ALBUM,
    payload: album
});

const setOneAlbum = (data) => ({
    type: SET_ONE_ALBUM,
    payload: data
});

const unAlbum = (album) => ({
    type: DELETE_ALBUM,
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
};

export const renderAlbumPhotos = (albumId) => async (dispatch) => {
    const res = await fetch(`/api/albums/${albumId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(setOneAlbum(data));
    } else {
        console.log(res.statusText, "renderAlbumPhotos thunk")
    }
};

export const addPhotoToAlbum = (formData) => async (dispatch) => {
    const res = await fetch("/api/albums/add", {
        method: "POST",
        body: formData
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(setOneAlbum(data));
    } else {
        console.log(res.statusText, "ADD PHOTO TO ALBUM THUNK")
    }
};

export const editAlbum = (formData, albumId) => async (dispatch) => {
    console.log("edit album thunk")
    const res = await fetch(`/api/albums/${albumId}`, {
        method: "PUT",
        body: formData
    });
    if (res.ok) {
        const editedAlbum = await res.json();
        dispatch(addAlbum(editedAlbum))
        return editedAlbum;
    } else {
        console.log("error--edit Album thunk (fetch call)")
    }
};

export const deleteAlbum = (albumId) => async (dispatch) => {
    const res = await fetch(`/api/albums/${albumId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(unAlbum(albumId))
    } else {
        console.log("bad fetch from deleteAlbum thunk")
    }
};


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
            const oneAlbumState = {...action.payload};
            console.log("album reducerSET_ONE_ALBUM: ", action.payload)
            // oneAlbumState[action.payload.album] = action.payload;
            return oneAlbumState;
        case DELETE_ALBUM:
            const lessState = {...state};
            console.log("album reducer DELETE ALBUM", lessState, action.payload)
            delete lessState[action.payload];
            console.log("album reducer ALBUM DELETED", lessState)
            return lessState;
        default:
            return state;
    }
}
