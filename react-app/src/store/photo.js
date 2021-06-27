// constants
import { ADD_TAG } from "./tag";
import { UPDATE_TAG } from "./tag";
const SET_PHOTOS = "photo/SET_PHOTOS";
const ADD_PHOTO = "photo/ADD_PHOTO";
const SET_ONE_PHOTO = "photo/SET_ONE_PHOTO";
const DELETE_PHOTO = "photo/DELETE_PHOTO";
const UPDATE_PHOTO = "photo/UPDATE_PHOTO";

// action creators
const setPhotos = (photo) => ({
  type: SET_PHOTOS,
  payload: photo,
});

const addPhoto = (photo) => ({
  type: ADD_PHOTO,
  payload: photo,
});

const setOnePhoto = (photo) => ({
  type: SET_ONE_PHOTO,
  payload: photo,
});

const deleteOnePhoto = (photo) => ({
  type: DELETE_PHOTO,
  payload: photo,
});

const updatePhoto = (photo) => ({
  type: UPDATE_PHOTO,
  payload: photo,
});

// thunks

export const renderAllPhotos = () => async (dispatch) => {
  const res = await fetch("/api/photos");
  if (res.ok) {
    const data = await res.json();
    // console.log(data);
    dispatch(setPhotos(data.photos));
  } else {
    console.log("This user has no photos");
  }
};

export const uploadPhoto = (formData) => async (dispatch) => {
  const res = await fetch("/api/photos", {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    const data = await res.json();
    // console.log("*****data is: ", data);
    dispatch(addPhoto(data));
  } else {
    console.log("error--upload photo thunk");
    console.log(res);
  }
};

export const editPhoto = (formData, id) => async (dispatch) => {
  const res = await fetch(`/api/photos/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (res.ok) {
    const data = await res.json();
    // console.log("*****data is: ", data);
    dispatch(updatePhoto(data));
  } else {
    console.log("error--update photo thunk");
    console.log(res);
  }
};

export const renderOnePhoto = (id) => async (dispatch) => {
  console.log("id from photo js", id);
  const res = await fetch(`/api/photos/${id}`);
  if (res.ok) {
    const data = await res.json();
    // console.log(data);
    dispatch(setOnePhoto(data)); //check data or data.photo
  } else {
    console.log("error-renderOnePhoto thunk");
  }
};

export const deletePhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/photos/${id}`, {
    method: "DELETE",
  });
  dispatch(deleteOnePhoto(id));
};

// reducer

const initialState = {};

export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PHOTOS:
      const newState = {};
      action.payload.forEach((photo) => {
        newState[photo.id] = photo;
      });
      return newState;

    case ADD_PHOTO:
      const singleState = { ...state };
      // console.log("****action.payload is:", action.payload);
      singleState[action.payload.id] = action.payload;
      return singleState;

    case SET_ONE_PHOTO:
      // console.log('logging action.payload', action.payload)

      const newPhotoState = { ...action.payload };
      return newPhotoState;

    case ADD_TAG:
      const singleTagState = { ...action.payload.photo };
      // console.log("****action.payload is:", action.payload);
      // singleTagState[action.payload.photo.id] = action.payload.photo;
      return singleTagState;
    case UPDATE_TAG:
      const singleTagUpdateState = {...action.payload.photo};
      return singleTagUpdateState;

    case DELETE_PHOTO:
      const oldState = {
        ...state,
      };
      delete oldState[action.payload.id];
      return oldState;

    case UPDATE_PHOTO:
      const updatedState = { ...state };
      updatedState[action.payload.id] = action.payload;
      return updatedState;

    default:
      return state;
  }
}
