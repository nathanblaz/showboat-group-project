import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderAllPhotos } from "../../store/photo.js";

const ViewPhotos = () => {
  // const [photos, setPhotos] = useState([]);
  const dispatch = useDispatch();
  const photos = useSelector(state => Object.values(state.photoReducer));

  useEffect(() => {
    dispatch(renderAllPhotos());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <h1>Photos</h1>
      {photos?.map((photo) => (
        <div
          key={photo?.id}
          style={{
            backgroundImage: `url(${photo?.image_url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "50%",
            height: 250,
            margin: 10,
            // width: "auto",
          }}
        />
      ))}
    </div>
  );
};

export default ViewPhotos;
