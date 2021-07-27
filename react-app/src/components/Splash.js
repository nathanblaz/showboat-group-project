import React from "react";

const Splash = () => {
  return (
    <div className="splash">
      <div className="splash-text">Share your experiences.</div>
      <div className="splash-img-container">
        <img
          src="https://showboat-app.s3.us-west-1.amazonaws.com/splash.jpeg"
          className="splash-img"
          alt="Splash"
        />
      </div>
    </div>
  );
};

export default Splash;
