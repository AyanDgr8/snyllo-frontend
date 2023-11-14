// src/components/routes/Middle.js

import React from 'react';

const Middle = () => {
  const images = [
    'upload/first.png',
    'upload/second.png',
    'upload/third.png',
    'upload/fourth.png',    
    'upload/fifth.png',
    'upload/sixth.png',
  ];

  return (
    <div style={imageListStyle}>
      {images.map((image, index) => (
        <img key={index} src={process.env.PUBLIC_URL + '/' + image} alt={`Image ${index}`} style={imageStyle} />
      ))}
    </div>
  );
};

const imageListStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
};

const imageStyle = {
  width: '100%',
  maxWidth: '100%',
  marginBottom: '10px',
};

export default Middle;
