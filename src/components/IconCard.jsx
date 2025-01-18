import React from 'react';

const IconCard = ({ src }) => {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center m-2 icon-card"
        style={{
          width: 90,
          height: 90,
          borderRadius: '50%', // Circular container
          overflow: 'hidden',  // Ensures the image doesn't spill out
          transition: 'transform 0.5s ease-in-out', // Smooth scaling effect
        }}
      >
        <img
          className="img-fluid skillsImg"
          src={src}
          alt="icon"
          style={{
            borderRadius: '50%', // Ensures the image itself is circular
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default IconCard;
