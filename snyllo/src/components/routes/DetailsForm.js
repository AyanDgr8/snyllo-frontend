// src/components/routes/DetailsForm.js


import React from 'react';
import './DetailsForm.css';

const DetailsForm = () => {
  return (
    <div className="container">
        <div className="form-part">
            <form id="form-section" onSubmit={handleSubmit}>
            <h1 className="head">Our Experts Have All The Answers For You</h1>
                <input type="text" placeholder="Your Name" />
                <input type="tel" placeholder="Phone Number" />
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Treatment" />
                <input type="text" placeholder="Location" />
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="image-part">
        <img
          src="https://img.freepik.com/free-photo/young-naked-woman-sitting-floor-body-skin-care-concept_144627-19367.jpg"
          alt="Lady"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

const imageStyle = {
  width: '100%',
  maxWidth: '350px',
};

export default DetailsForm;
