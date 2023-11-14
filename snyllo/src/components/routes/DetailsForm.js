// src/components/routes/DetailsForm.js

import React from 'react';
import './DetailsForm.css';

const DetailsForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://your-backend-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          treatment: formData.get('treatment'),
          location: formData.get('location'),
        }),
      });

      if (response.ok) {
        console.log('success');
      } else {
        console.log('failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-part">
        <form id="form-section" onSubmit={handleSubmit}>
          <h1 className="head">Our Experts Have All The Answers For You</h1>
          <input type="text" placeholder="Your Name" name="name" />
          <input type="tel" placeholder="Phone Number" name="phone" />
          <input type="email" placeholder="Email Address" name="email" />
          <input type="text" placeholder="Treatment" name="treatment" />
          <input type="text" placeholder="Location" name="location" />
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
