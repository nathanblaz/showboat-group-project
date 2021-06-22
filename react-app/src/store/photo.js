// constants
const SET_PHOTOS = "photo/SET_PHOTOS";
const ADD_PHOTO = "photo/ADD_PHOTO";

// action creators
const setPhotos = (photo) => ({
  type: SET_PHOTOS,
  payload: photo,
});

const addPhoto = (photo) => ({
  type: ADD_PHOTO,
  payload: photo,
});

// thunks

export const renderAllPhotos = () => async (dispatch) => {
  const res = await fetch("/api/photos");
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    dispatch(setPhotos(data.photos));
  }
};

export const uploadPhoto = (formData) => async (dispatch) => {
  const res = await fetch("/api/photos", {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    await res.json();
    
  } else {
    console.log("error");
  }
};

// reducer

const initialState = { };

export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PHOTOS:
      const newState = {};
      action.payload.forEach((photo) => {
        newState[photo.id] = photo;
      });
      return newState;
    case ADD_PHOTO:
      const singleState = {...state};
      console.log("****action.payload is:", action.payload);
      singleState[action.payload.photo.id] = action.payload.photo;
      return singleState;
    default:
      return state;
  }
}
