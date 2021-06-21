import React, { useState, useEffect } from "react";

const ViewPhotos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("api/photos");
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setPhotos(data.photos);
      } else {
        console.log("error");
      }
    })();
  }, []);
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
      {photos.map((photo) => (
        <div
          key={photo.id}
          style={{
            backgroundImage: `url(${photo.url})`,
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
