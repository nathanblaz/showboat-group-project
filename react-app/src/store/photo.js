// constants
const SET_PHOTOS = "photo/SET_PHOTOS";

// action creators
const setPhotos = (photo) => ({
  type: SET_PHOTOS,
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

// reducer

const initialState = { photo: null };

export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PHOTOS:
      const newState = {};
      action.payload.forEach((photo) => {
        newState[photo.id] = photo;
      });
      return newState;
    default:
      return state;
  }
}
