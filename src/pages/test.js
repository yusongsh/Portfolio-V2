import React from "react";
import { useState } from "react";
import profilesm from "../assets/profile_sm.png";

const Test = () => {
  const [isImageVisible, setIsImageVisible] = React.useState(false);
  const [imageStyle, setImageStyle] = React.useState({
    display: "none",
    position: "absolute",
    top: 0,
    left: 0,
  });

  const handleMouseMove = (event) => {
    setImageStyle({
      display: "block",
      position: "absolute",
      top: event.clientY + 20,
      left: event.clientX + 20,
    });
  };
  return (
    <>
      <div
        onMouseEnter={() => setIsImageVisible(true)}
        onMouseLeave={() => setIsImageVisible(false)}
        onMouseMove={handleMouseMove}
      >
        {isImageVisible ? (
          <img
            src={profilesm}
            alt="Revealed image"
            style={imageStyle}
            className="w-32 h-auto object-cover"
          />
        ) : (
          <div>Hover over me to reveal the image</div>
        )}
      </div>
    </>
  );
};

export default Test;

export const Head = () => <title>test</title>;
